package com.company.simpbackend.dao;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;


import com.company.simpbackend.entity.UserCommission;

@Repository
public class UserCommissionRepository extends SimpleJpaRepository<UserCommission, Integer>{
	
	@Autowired
	private EntityManager entityManager;
	
	public UserCommissionRepository(EntityManager em) {
		super(UserCommission.class, em);
	
	}

}
