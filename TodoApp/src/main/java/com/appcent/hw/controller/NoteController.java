package com.appcent.hw.controller;

import com.appcent.hw.dto.NoteRequest;
import com.appcent.hw.service.NoteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping(value = "api/1.0/note")
public class NoteController {

    private NoteService noteService;

    @Autowired //final tanımlayıp @RequiredConstructer şeklinde de tanımlanabilir
    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping
    public ResponseEntity<String> createNewNote(@Valid @RequestBody NoteRequest noteRequest){
        noteService.createNewNote(noteRequest);
        return ResponseEntity.ok("Note saved");
    }

    @PutMapping(value = "update")
    public ResponseEntity<String> updateNote(@Valid @RequestBody NoteRequest noteRequest){
        noteService.updateNote(noteRequest);
        return ResponseEntity.ok("Note updated");
    }

    @DeleteMapping(value = "delete")
    public ResponseEntity<String>deleteNote(@RequestParam(value = "id") Long id){
        noteService.deleteNote(id);
        return ResponseEntity.ok("Note deleted");
    }

}
