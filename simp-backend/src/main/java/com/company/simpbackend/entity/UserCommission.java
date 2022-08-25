package com.company.simpbackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import org.springframework.lang.Nullable;

@Data
@Entity
public class UserCommission {

	@Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
	private int transactionId;
	private int userId;
	private int userAmount;
	private String transactionMonth;
	private int userQuota;
	private int pCost;
	private int productTypeId;
	private String pType;
	private int commissionPercentage;

}
