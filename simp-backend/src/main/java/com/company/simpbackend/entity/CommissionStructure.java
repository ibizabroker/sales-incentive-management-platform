package com.company.simpbackend.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
public class CommissionStructure {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer commissionId;
    private Integer productTypeId;
    private Integer startRange;
    private Integer endRange;
    private Integer commissionPercentage;
}
