import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTION from "../questions.js";
import { useState } from "react";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  //   timer = 10 second if answer is not selected.
  let timer = 10000;

  //   timer = 1 second if answer is selected.
  if (answer.selectedAnswer) {
    timer = 1000;
  }

  //   timer = 2 second if answer is correct or wrong.
  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    // add selected answer after 1 second.
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[index].answers[0] === answer,
      });

      //   add answer in userAnswers state / array.
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  //   if answer is selected & it is can be correct or wrong then ---> answerState = correct or wrong. otherwise answerState = answered.
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
        {/* if timer is change then QuestionTimer is recreated. */}
      <QuestionTimer
        key={timer} 
        timeout={timer}
        onTimeout={answerState === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTION[index].text}</h2>
      <Answers
        answers={QUESTION[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
