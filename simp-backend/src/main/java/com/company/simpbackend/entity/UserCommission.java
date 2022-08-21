package com.company.simpbackend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//import lombok.Data;

//@Data
@Entity
public class UserCommission {
	
	

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int transactionId;
	
	
	private int  userId;
	
	private int userAmount;
	
	private String month;
	
	private int userQuota;
	
	public UserCommission() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UserCommission(int transactionId, int userId, int userAmount, String month, int userQuota) {
		super();
		this.transactionId = transactionId;
		this.userId = userId;
		this.userAmount = userAmount;
		this.month = month;
		this.userQuota = userQuota;
	}

	public int getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getUserAmount() {
		return userAmount;
	}

	public void setUserAmount(int userAmount) {
		this.userAmount = userAmount;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public int getUserQuota() {
		return userQuota;
	}

	public void setUserQuota(int userQuota) {
		this.userQuota = userQuota;
	}
	

}
