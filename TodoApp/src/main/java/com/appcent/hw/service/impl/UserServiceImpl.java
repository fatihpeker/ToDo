package com.appcent.hw.service.impl;

import com.appcent.hw.dto.NoteRequest;
import com.appcent.hw.dto.UserUpdateRequest;
import com.appcent.hw.model.User;
import com.appcent.hw.repository.NoteRepository;
import com.appcent.hw.repository.UserRepository;
import com.appcent.hw.service.NoteService;
import com.appcent.hw.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;


    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createNewUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserByUsername(String username) {
        Objects.requireNonNull(username, "username cannot be null");
        return userRepository.findUserByUsername(username);
    }

    @Override
    public User updateUser(UserUpdateRequest userUpdateRequest) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = getUserByUsername(username);
        if (userUpdateRequest.getName()!=null){
            user.setName(userUpdateRequest.getName());
        }
        if (userUpdateRequest.getSurname()!=null){
            user.setSurname(userUpdateRequest.getSurname());
        }
        return userRepository.save(user);
    }

    @Override
    public void deleteUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = getUserByUsername(username);
        userRepository.delete(user);
    }

    @Override
    public Boolean existsByUsername(String username) {
        Objects.requireNonNull(username, "username cannot be null");
        return userRepository.existsByUsername(username);
    }
}
