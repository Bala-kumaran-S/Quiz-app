import React, { useState, useEffect } from 'react';
import { fetchQuizData } from '../utils/api';
import './quiz.css';
import Result from '../components/resultpage';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [usedIndices, setUsedIndices] = useState([]);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        const loadQuizData = async () => {
            try {
                const data = await fetchQuizData();
                const selectedQuestions = [];
                const indices = [];

                while (selectedQuestions.length < 5 && selectedQuestions.length < data.questions.length) {
                    const randomIndex = Math.floor(Math.random() * data.questions.length);
                    if (!indices.includes(randomIndex)) {
                        indices.push(randomIndex);
                        selectedQuestions.push(data.questions[randomIndex]);
                    }
                }

                setQuestions(selectedQuestions);
                setUsedIndices(indices);
            } catch (error) {
                console.error("Error loading quiz data:", error);
            }
        };
        loadQuizData();
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            handleNextQuestion();
        }
        const timer = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        if (option.is_correct) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption(null);
            setTimeLeft(30);
        } else {
            setShowScore(true);
        }
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    if (showScore) {
        return <Result name={'you'} score={score} total={5}/>
    }

    return (
      <div className="quiz-container">
          <div className="progress-bar">
              <div className="progress" style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}></div>
          </div>
          <div className="question-section">
            <div className='ques-time'>
              <h2>Question {currentQuestion + 1}/{questions.length}</h2>
              <div className="timer">Time left: {timeLeft} seconds</div>
              </div>
              <p>{questions[currentQuestion].description}</p>
              
          </div>
  
          <div className="answer-section">
              {questions[currentQuestion].options.map((option) => (
                  <button
                      key={option.id}
                      className={`option-button ${selectedOption?.id === option.id ? 'selected' : ''}`}
                      onClick={() => handleOptionSelect(option)}
                  >
                      {option.description}
                  </button>
              ))}
          </div>
  
          {selectedOption && (
              <button 
                  className="next-button"
                  onClick={handleNextQuestion}
              >
                  {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </button>
          )}
      </div>
  );
};

export default Quiz;