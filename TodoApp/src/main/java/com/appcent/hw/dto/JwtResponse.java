package com.appcent.hw.dto;

import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class JwtResponse {

    private String token;

    @Builder.Default
    private String type = "Bearer";

    private Long id;

    private String username;

}
