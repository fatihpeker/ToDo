package com.appcent.hw.repository;

import com.appcent.hw.model.Note;
import com.appcent.hw.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {

    Note getNoteById(Long id);

    List<Note> getNoteByUser(User user);

    @Transactional
    void deleteAllByUser(User user);


}
