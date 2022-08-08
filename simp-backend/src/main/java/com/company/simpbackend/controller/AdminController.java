package com.company.simpbackend.controller;

import com.company.simpbackend.dao.CommissionStructureRepository;
import com.company.simpbackend.dao.SalesDetailsRepository;
import com.company.simpbackend.dao.UserCommissionRepository;
import com.company.simpbackend.dao.UserRepository;
import com.company.simpbackend.entity.*;
import com.company.simpbackend.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserCommissionRepository userCommissionRepository;
    
    @Autowired
    private SalesDetailsRepository salesDetailsRepository;
    
    @Autowired
    private CommissionStructureRepository commissionStructureRepository;

    @PostMapping("/users")
//    @PreAuthorize("hasRole('Admin')")
    public User addUserByAdmin(@RequestBody User user) {
        Role role = new Role();
        role.setRoleName("Salesman");
        Set<Role> setRole = new HashSet<>();
        setRole.add(role);
        user.setRole(setRole);

        String password = user.getPassword();
        String encryptPassword = passwordEncoder.encode(password);
        user.setPassword(encryptPassword);
        userRepository.save(user);
        return user;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("User with id "+ id +" does not exist."));
        return ResponseEntity.ok(user);
    }

    @PutMapping("/users/{id}")
//    @PreAuthorize("hasRole('Admin')")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User userDetails) {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("User with id "+ id +" does not exist."));

        user.setName(userDetails.getName());
        user.setRole(userDetails.getRole());
        user.setUsername(userDetails.getUsername());

        User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @PutMapping("/update-commission")
//  @PreAuthorize("hasRole('Admin')")
    public ResponseEntity<UserCommission> updateUser( Integer userId, String month,  @RequestBody UserCommission commissionDetails) {
        UserCommission commission = userCommissionRepository.findById(userId).orElseThrow(() -> new NotFoundException("User with id "+ userId +" does not exist."));

        commission.setUserAmount(commissionDetails.getUserAmount());

        UserCommission updatedCommission = userCommissionRepository.save(commission);
        return ResponseEntity.ok(updatedCommission);
    }
    
    @PostMapping("/addsalesdetails")
//  @PreAuthorize("hasRole('Admin')")
    public boolean addSalesDetails(@RequestBody List<SalesDetails> salesDetails){
    	salesDetailsRepository.saveAll(salesDetails);
    	return true;
    }

    @PutMapping("/change-commission-structure/{id}")
//    @PreAuthorize("hasRole('Admin')")
    public ResponseEntity<CommissionStructure> updateCommissionStructure(@PathVariable Integer id, @RequestBody CommissionStructure commissionStructure) {
        CommissionStructure structure = commissionStructureRepository.findById(id).orElseThrow(() -> new NotFoundException("Commission Structure with id "+ id +" does not exist."));

        structure.setCommissionPercentage(commissionStructure.getCommissionPercentage());
        structure.setStartRange(commissionStructure.getStartRange());
        structure.setEndRange(commissionStructure.getEndRange());

        CommissionStructure updatedCommissionStructure = commissionStructureRepository.save(structure);
        return ResponseEntity.ok(updatedCommissionStructure);
    }
    @GetMapping("/change-commission-structure")
    public List<CommissionStructure> getAllCommissions() {
        return commissionStructureRepository.findAll();
    }
    @GetMapping("/change-commission-structure/{id}")
    public ResponseEntity<CommissionStructure> getCommissionStructureById(@PathVariable Integer id) {
        CommissionStructure commissionStructure = commissionStructureRepository.findById(id).orElseThrow(() -> new NotFoundException("Commission Structure with id "+ id +" does not exist."));
        return ResponseEntity.ok(commissionStructure);
    }
}