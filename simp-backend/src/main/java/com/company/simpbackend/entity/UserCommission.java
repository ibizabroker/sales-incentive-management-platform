package com.company.simpbackend.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class UserCommission {
	
	@Id
	private int  userId;
	
	private int userAmount;
	
	private String month;
	
	
	

}
