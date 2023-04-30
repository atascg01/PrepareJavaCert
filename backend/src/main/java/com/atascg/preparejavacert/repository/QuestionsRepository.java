package com.atascg.preparejavacert.repository;

import com.atascg.preparejavacert.entity.Questions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionsRepository extends JpaRepository<Questions, Integer> {
}
