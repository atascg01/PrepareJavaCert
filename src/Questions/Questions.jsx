import React, { useState } from 'react';
import './Questions.css';

function Questions() {
    /* TODO: FETCH BACKEND
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((questions) => {
            setQuestions(questions);
          });
    }, []);
    */

    const questions = [
        {
            title: "What is the meaning of OOP?",
            possibleAnswers: ["Operating Oriented Principles", "Object Oriented Programming", "Oriented Object Programming", "Order Object Preparation"],
            answer: 1
        },
        {
            title: "Question 2",
            possibleAnswers: ["1", "2", "3", "4"],
            answer: 1
        }];

    const [counter, setCounter] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("")

    function checkAnswer() {
        if (selectedAnswer !== questions[counter].answer) {
            alert("Incorrect answer!");
            return;
        }

        alert("Correct! Next question")
        if (counter < questions.length - 1) {
            setCounter(counter + 1)
            setSelectedAnswer("")
        }
    }

    const onOptionChange = e => {
        setSelectedAnswer(e.target.value)
    }

    return (
        <div>
            <h1>{questions[counter].title}</h1>
            <p id="question"></p>
            <form id="quiz">
                {questions[counter].possibleAnswers.map((possibleAnswer, index) => {
                    return (
                        <div key={index}>
                            <input type="radio" name="answer" checked={selectedAnswer === `${index}`} value={index} onChange={onOptionChange} />
                            <label>{possibleAnswer}</label>
                        </div>
                    );
                })}
                <button type="button" onClick={checkAnswer}>Verify</button>
            </form>
        </div>
    );
}

export default Questions;