package com.atascg.preparejavacert.controller;

import com.atascg.preparejavacert.entity.Questions;
import com.atascg.preparejavacert.repository.QuestionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RequestMapping("/api/v1/questions")
@RestController
@CrossOrigin
public class QuestionsController {

    @Autowired
    private QuestionsRepository questionsRepository;

    @GetMapping
    public ResponseEntity<List<Questions>> getQuestions() {
        List<Questions> questions = questionsRepository.findAll();
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }

}
