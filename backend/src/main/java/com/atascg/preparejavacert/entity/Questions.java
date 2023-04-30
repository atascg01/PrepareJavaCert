package com.atascg.preparejavacert.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "questions")
public class Questions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private List<String> options;
    private int solution;

    public Questions() {
    }

    public Questions(long id, String title, List<String> options, int solution) {
        this.id = id;
        this.title = title;
        this.options = options;
        this.solution = solution;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<String> getOptions() {
        return options;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }

    public int getSolution() {
        return solution;
    }

    public void setSolution(int solution) {
        this.solution = solution;
    }
}
