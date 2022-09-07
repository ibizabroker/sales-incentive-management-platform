<h1 align="center">
    <br>
    Sales Incentive Management System
    <br>
</h1>

<p align="center">
  <a href="https://spring.io/projects/spring-boot/">
    <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" alt="Spring Boot">
  </a>
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="React Native" >
  </a>
  <a href="https://www.mysql.com/">
     <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
  </a>
  <a href="https://hibernate.org/">
     <img src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white" alt="Hibernate">
  </a>
  <a href="https://maven.apache.org/">
     <img src="https://img.shields.io/badge/apache_maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white" alt="Maven">
  </a>
  <a href="https://getbootstrap.com/">
     <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap">
  </a>
  <a href="https://spring.io/projects/spring-security">
     <img src="https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white" alt="Spring Security">
  </a>
  <a href="https://jwt.io/">
     <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT">
  </a>
</p>

<p align="center">
  <a href="#overview">Overview</a>
  •
  <a href="#entities">Entities</a>
  •
  <a href="#apis">APIs</a>
  •
  <a href="#demo">Demo</a>
  •
  <a href="#application-properties">Application Properties</a>
  •
  <a href="#development">Development</a>
  •
  <a href="#build">Build</a>
</p>

# Overview

## Problem  Statement
Creating a solution for a customer which is a big player in the Vehicles sales. The company has sales channels in multi geographies and sells different types of vehicles - 2 wheelers, 3 wheelers, 4 wheelers and commercial vehicles. They have a complex commission calculation model and needs help in creating a sales incentive management platform.

## Demands of the customer
* Used to manage the commission to be paid to the Salesmen.
* The system should allow addition of a sales team member.
* System should allow for the definition of products under the following product types:
    * 2 Wheelers
    * 3 Wheelers
    * 4 Wheelers
    * Commercial Vehicles
* System should allow for batch input of sales for every product on a daily basis. 
* The system should calculate the commission payable for every sales team member once the data for a month is updated.

## Technology Stack
* Backend - Spring Boot
* Database - MySQL
* Frontend - React
* Build System - Maven

<br>

# Entities
## User
* userId (primary key)
* username
* name
* password
* userQuota
* role

## Role
* roleId (primary key)
* roleName

## User Role (Hibernate Auto Generated Table)
* userId (foreign key)
* roleId (foreign key)

## Product Type
* productTypeId (primary key)
* pType

## Products
* pId (primary key)
* pName
* pCost
* pType

## Sales Details
* salesId (primary key)
* pId (foreign key)
* userId (foreign key)
* pName
* pType
* transactionMonth

## Commission Structure
* commissionId (primary key)
* productTypeId (foreign key)
* startRange
* endRange
* commissionPercentage

## User Commission (Query Auto Generated Table)
* transactionId (primary key)
* userId (foreign key)
* productTypeId (foreign key)
* userAmount
* transactionMonth
* pCost
* userQuota
* pType
* commissionPercentage

<br>

# APIs

## Authenticate
* Post Mapping to return JWT.
```
{
    username: "user",
    password: "password"
}
```

## Admin
* Get Mapping to find all users in the database.
* Get Mapping to find user by ID provided.
* Post Mapping to create user.
```
{
    "username": "username",
    "name": "Full Name",
    "password": "password",
    "userQuota": 50000
}
```
* Put Mapping to edit user by ID.
```
{
    "username": "newusername",
    "name": "Full Name",
    "password": "password",
    "userQuota": 48000
}
```
* Get Mapping to find all products in the database.
* Post Mapping to create new product.
```
{
    "pName": "Honda",
    "pCost": 72000
    "pType": "2 Wheeler"
}
```
* Post Mapping to add sales details (Upload CSV in frontend). Auto updates the User Commission table when performed.
```
[
    {
        "pId": 1,
        "userId": 2,
        "pName": "Honda",
        "pType": "2 Wheeler",
        "transactionMonth": "2022-07"
    },
    {
        "pId": 2,
        "userId": 3,
        "pName": "Hyundai",
        "pType": "4 Wheeler",
        "transactionMonth": "2022-08"
    }
]
```
* Get Mapping to return commission structure for every product type.
* Get Mapping to find commission structure for a particular product type within a rage by it's ID.
* Put Mapping to edit the commission structure by ID.
```
{
    "productTypeId": 3,
    "startRange": 28000,
    "endRange": 45000,
    "commissionPercentage": 6
}
```
* Get Mapping for forced commission change. Updates the auto calculated commission amount of a user by force using Query.
```
{
    "userId": 2,
    "transactionMonth": "2022-07",
    "userAmount": 34000
}
```

## Salesman
* Get Mapping to find all sales by every salesman in the database.
* Get Mapping to find their sales based on the month.
```
{
    "userId": 2,
    "transactionMonth": "2022-07"
}
```
* Get Mapping to display all the sales carried out by the logged in user.
* Get Mapping to display commission amount and user quota in bar chart form for the logged in user.

<br>

# Demo
https://user-images.githubusercontent.com/70258012/188926718-c1980ceb-239f-4c1b-848e-5da0af999ebe.mp4

<br>

# Application Properties
```
server.port = yourPreferredPortNumber

spring.datasource.url = jdbc:mysql://localhost:3306/yourSchemaName
spring.datasource.username = yourUsername
spring.datasource.password = yourPassword
```

<br>

# Development
* Frontend
```
npm install
```
* Backend
```
mvn install
```

<br>

# Build
* Frontend
```
npm start
```

* Backend
```
mvn spring-boot:run
```
