package com.appcent.hw.controller;

import com.appcent.hw.dto.UserUpdateRequest;
import com.appcent.hw.service.NoteService;
import com.appcent.hw.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/1.0/user")
public class UserController {

    private final UserService userService;

    private final NoteService noteService;

    @PutMapping(value = "update")
    public ResponseEntity<String>userUpdate(@Valid @RequestBody UserUpdateRequest userUpdateRequest){
        userService.updateUser(userUpdateRequest);
        return ResponseEntity.ok("User properties added");
    }

    @DeleteMapping(value = "delete")
    public ResponseEntity<String> deleteUser(){
        noteService.deleteAllByUser();
        userService.deleteUser();
        return ResponseEntity.ok("User deleted");
    }

}
