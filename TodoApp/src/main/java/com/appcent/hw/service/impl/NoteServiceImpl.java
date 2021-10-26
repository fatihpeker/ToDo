package com.appcent.hw.service.impl;

import com.appcent.hw.dto.NoteRequest;
import com.appcent.hw.model.Note;
import com.appcent.hw.model.User;
import com.appcent.hw.repository.NoteRepository;
import com.appcent.hw.service.NoteService;
import com.appcent.hw.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class NoteServiceImpl implements NoteService {

    private final NoteRepository noteRepository;

    private final UserService userService;

    @Override
    public Note createNewNote(NoteRequest noteRequest) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUserByUsername(username);
        Note note =  Note.builder().title(noteRequest.getTitle()).notes(noteRequest.getNotes()).user(user).build();
        return noteRepository.save(note);
    }

    @Override
    public Note updateNote(NoteRequest noteRequest) {
        Note note = getNoteById(noteRequest.getId());
        note.setTitle(noteRequest.getTitle());
        note.setNotes(noteRequest.getNotes());

        return noteRepository.save(note);
    }

    @Override
    public Note getNoteById(Long id) {
        return noteRepository.getNoteById(id);
    }

    @Override
    public void deleteNote(Long id) {
        Note note = noteRepository.getNoteById(id);
        noteRepository.delete(note);
    }

    @Override
    public void deleteAllByUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userService.getUserByUsername(username);
        noteRepository.deleteAllByUser(user);
    }
}
