package com.appcent.hw.repository;

import com.appcent.hw.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findUserByUsername(String username);

    Boolean existsByUsername(String username);
}
