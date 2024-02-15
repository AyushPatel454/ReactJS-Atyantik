import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import QuizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [answerState, setAnswerState] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  // for selecting the current question.
  const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;

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

  // useCallback();
  // this function now not re-created on every render.
  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setAnswerState('answered');
    // add user answer in userAnswers state / array.
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
    

    setTimeout(() => {
      if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('wrong');
      }

      setTimeout(() => {
        setAnswerState('');
        
      }, 2000);
    },1000);
  },[activeQuestionIndex]);

  // this function now not re-created on every render. render if handleSelectAnswer is changed.(but it is also not changed on every render.)
  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  },[handleSelectAnswer]);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected = answer === userAnswers[userAnswers.length -1]
            let cssClass = '';

            if(answerState === 'answered' && isSelected) {
              cssClass = 'selected';
            }

            if((answerState === 'correct' || answerState === 'wrong') && isSelected) {
              cssClass = answerState;
            }

            return (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>
                {answer}
              </button>
            </li>
          )})}
        </ul>
      </div>
    </div>
  );
}
