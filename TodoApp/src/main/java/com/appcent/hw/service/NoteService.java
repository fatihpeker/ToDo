package com.appcent.hw.service;

import com.appcent.hw.dto.NoteRequest;
import com.appcent.hw.model.Note;
import com.appcent.hw.model.User;

import java.util.List;
import java.util.Set;

public interface NoteService {

    Note createNewNote(NoteRequest noteRequest);

    Note updateNote(NoteRequest noteRequest);

    Note getNoteById(Long id);

    void deleteNote(Long id);

    void deleteAllByUser();

    List<Note> getAllNotes();
}
