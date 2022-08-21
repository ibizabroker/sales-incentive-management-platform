package com.company.simpbackend.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import com.company.simpbackend.entity.SalesDetails;
import com.company.simpbackend.entity.UserCommission;


@Repository
public class SalesDetailsRepository extends SimpleJpaRepository<SalesDetails, Integer>{
	
	@Autowired
	private EntityManager entityManager;
	
	public SalesDetailsRepository(EntityManager em) {
		super(SalesDetails.class, em);
	
	}

	public List<SalesDetails> getMySales(Integer userId, String transactionMonth) {

		Query q = entityManager.createNativeQuery("SELECT * FROM SALES_DETAILS WHERE USER_ID="+userId+" AND TRANSACTION_MONTH=" +transactionMonth,SalesDetails.class);
		System.out.println(q);
		List<SalesDetails> mysales = q.getResultList();
		return mysales;
	}

	public List<UserCommission> getSalesChart(int userId) {
		Query q = entityManager.createNativeQuery("SELECT * FROM USER_COMMISSION WHERE USER_ID= "+userId,UserCommission.class);
		System.out.println(q);
		List<UserCommission> saleschart = q.getResultList();
		return saleschart;
	}

	public List<UserCommission> getMyCommission(Integer userId) {
		Query q = entityManager.createNativeQuery("SELECT * FROM USER_COMMISSION WHERE USER_ID= "+userId,UserCommission.class);
		System.out.println(q);
		List<UserCommission> salesCommission= q.getResultList();
		return salesCommission;
	}

}
