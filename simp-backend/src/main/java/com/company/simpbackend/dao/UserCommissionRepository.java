package com.company.simpbackend.dao;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;


import com.company.simpbackend.entity.UserCommission;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class UserCommissionRepository extends SimpleJpaRepository<UserCommission, Integer>{
	
	@Autowired
	private EntityManager entityManager;
	
	public UserCommissionRepository(EntityManager em) {
		super(UserCommission.class, em);
	
	}

	@Transactional
	@Modifying
	public void addUserCommission() {

		Query q = entityManager.createNativeQuery(
				"INSERT INTO user_commission(transaction_id, user_id, user_amount, commission_percentage, transaction_month, p_type, p_cost, user_quota, product_type_id)\n" +
				"SELECT sd.sales_id AS transaction_id, sd.user_id, 0 AS user_amount, 0 AS commission_percentage, sd.transaction_month, sd.p_type, p.p_cost, u.user_quota, pt.product_type_id\n" +
				"FROM sales_details AS sd\n" +
				"INNER JOIN products as p\n" +
				"ON sd.p_id = p.p_id\n" +
				"INNER JOIN user AS u\n" +
				"ON sd.user_id = u.user_id\n" +
				"INNER JOIN product_type AS pt\n" +
				"ON sd.p_type = pt.p_type\n" +
				"WHERE NOT EXISTS (SELECT * FROM user_commission AS uc WHERE uc.transaction_id = sd.sales_id)", UserCommission.class);
		System.out.println(q);
		q.executeUpdate();
//		List<UserCommission> userCommissions = q.getResultList();
//		return userCommissions;

	}

	@Transactional
	@Modifying
	public void updateCommissionPercentage() {

		Query q = entityManager.createNativeQuery(
				"UPDATE user_commission AS uc, commission_structure AS cs\n" +
				"SET uc.commission_percentage = cs.commission_percentage\n" +
				"WHERE cs.start_range <= uc.p_cost AND (cs.end_range >= uc.p_cost OR cs.end_range IS NULL)\n" +
				"AND (cs.product_type_id = uc.product_type_id)", UserCommission.class);
		System.out.println(q);
		q.executeUpdate();

	}

	@Transactional
	@Modifying
	public void updateUserAmount() {

		Query q = entityManager.createNativeQuery(
				"UPDATE user_commission as uc\n" +
				"SET uc.user_amount = uc.p_cost*(uc.commission_percentage/100)", UserCommission.class);
		System.out.println(q);
		q.executeUpdate();

	}

	@Transactional
	@Modifying
	public void forcedCommission(Integer userId, String transactionMonth, Integer userAmount) {

		Query q = entityManager.createNativeQuery(
				"UPDATE user_commission AS uc\n" +
				"SET uc.user_amount = "+userAmount+"\n" +
				"WHERE uc.user_id = "+userId+" AND uc.transaction_month= "+transactionMonth, UserCommission.class);
		System.out.println(q);
		q.executeUpdate();

	}

}
