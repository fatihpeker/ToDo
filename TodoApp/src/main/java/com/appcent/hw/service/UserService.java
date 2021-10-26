package com.appcent.hw.service;

import com.appcent.hw.dto.UserUpdateRequest;
import com.appcent.hw.model.User;
import org.springframework.data.domain.Page;


import java.util.Set;

public interface UserService {

    User createNewUser(User user);

    User getUserByUsername(String username);

    User updateUser(UserUpdateRequest userUpdateRequest);

    void deleteUser();

    Boolean existsByUsername(String username);


}
