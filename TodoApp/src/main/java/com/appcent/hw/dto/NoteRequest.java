package com.appcent.hw.dto;

import lombok.Data;

import javax.validation.constraints.Size;

@Data
public class NoteRequest {

    private Long id;

    @Size(max = 255)
    private String title;

    private String notes;

}
