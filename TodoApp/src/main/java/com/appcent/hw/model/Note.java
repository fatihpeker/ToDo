package com.appcent.hw.model;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;


@NoArgsConstructor
@SuperBuilder
@Data
@Entity
public class Note extends BaseEntity{

    private String title;

    private String notes;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

}
