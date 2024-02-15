import { useState } from "react";
import QUESTIONS from "../questions.js";
import QuizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // for selecting the current question.
  const activeQuestionIndex = userAnswers.length;

  // checking quiz is complete or not.
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // if quiz is complete, display the summary component.
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={QuizCompleteImg} alt="Quiz Completed Img" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  // shuffling the options of current question.
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5); // Math.random() returns a number between 0 and 1 (excluding 1) - 0.5 will return a number between -0.5 and 0.5 - this will randomly return a positive or negative number - so we it sort can be in ascending or descending order.

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
