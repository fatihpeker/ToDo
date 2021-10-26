package com.appcent.hw.repository;

import com.appcent.hw.model.Note;
import com.appcent.hw.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface NoteRepository extends JpaRepository<Note, Long> {

    Note getNoteById(Long id);

    @Transactional
    void deleteAllByUser(User user);

}
