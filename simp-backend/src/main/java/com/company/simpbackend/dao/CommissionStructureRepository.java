package com.company.simpbackend.dao;

import com.company.simpbackend.entity.CommissionStructure;
import com.company.simpbackend.entity.UserCommission;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public class CommissionStructureRepository extends SimpleJpaRepository<CommissionStructure, Integer> {

    @Autowired
    private EntityManager entityManager;

    public CommissionStructureRepository(EntityManager em) {
        super(CommissionStructure.class, em);

    }
}
