import React, { useEffect, useState } from 'react';
import './Questions.css';

function Questions() {

    const [questions, setQuestions] = useState([]);
    const [counter, setCounter] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(-1)
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/questions")
            .then((response) => response.json())
            .then((questions) => {
                setQuestions(questions);
                if (questions.length > 0) {
                    setLoading(false);
                }
            })
            .catch(error => {
                throw (error);
            });
    }, []);

    function checkAnswer() {
        if (selectedAnswer !== questions[counter].solution) {
            alert("Incorrect answer!");
            return;
        }

        alert("Correct! Next question")
        setCounter(counter + 1)
        setSelectedAnswer(-1)

    }

    function handleClick(value) {
        setSelectedAnswer(value.index)
    }

    // TODO Make div colored if selected

    return (
        <div>
            {isLoading && <div className="loading"><div className="spinner"></div></div>}
            {!isLoading && questions.length === 0 && <div>No questions found</div>}
            {!isLoading && questions.length > 0 && counter >= questions.length && <div>Quiz completed!</div>}
            {!isLoading && counter < questions.length &&
                <div className='quizDiv'>
                    <h1>{questions[counter].title}</h1>
                    <p id="question"></p>
                    <form id="quiz">
                        {questions[counter].options.map((option, index) => {
                            return (
                                <div onClick={() => handleClick({index})} key={index}>
                                    <input type="radio" name="answer" checked={selectedAnswer === `${index}`} value={index} />
                                    <label>{option}</label>
                                </div>
                            );
                        })}
                        <button type="button" onClick={checkAnswer}>Verify</button>
                    </form>
                </div>
            }
        </div>
    );
}

export default Questions;