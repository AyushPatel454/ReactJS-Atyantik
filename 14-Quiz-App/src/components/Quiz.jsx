import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Quesetion.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  // for selecting the current question.
  const activeQuestionIndex = userAnswers.length;

  // useCallback();
  // this function now not re-created on every render.
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      // add user answer in userAnswers state / array.
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },
    []
  );

  // this function now not re-created on every render. render if handleSelectAnswer is changed.(but it is also not changed on every render.)
  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  // checking quiz is complete or not.
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // if quiz is complete, display the summary component.
  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    );
  }

  return (
    <div id="quiz">
      {/* Question Component is re-create if activeQuestionIndex is changed. */}
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
