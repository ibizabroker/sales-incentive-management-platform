package com.company.simpbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.simpbackend.dao.SalesDetailsRepository;

import com.company.simpbackend.entity.SalesDetails;
import com.company.simpbackend.entity.UserCommission;


@CrossOrigin("http://localhost:3000/")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
    private SalesDetailsRepository salesdetailsRepository;
	
	@GetMapping("/allsales")
    public List<SalesDetails> getAllSales() {
        return salesdetailsRepository.findAll();
    }
	
	@GetMapping("/mysales")
    public List<SalesDetails> getMySales(Integer userId, String transactionMonth) {
        return salesdetailsRepository.getMySales(userId,transactionMonth);
    }
	
	@GetMapping("/saleschart")
    public List<UserCommission> getSalesChart(int userId) {
        return salesdetailsRepository.getSalesChart(userId);
    }

}
