package com.company.simpbackend.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class SalesDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer salesId;
    private Integer pId;
    private Integer userId;
    private String pName;
    private String pType;
    private String transactionMonth;

}
