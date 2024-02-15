import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();
  // shuffling the options of current question.
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // Math.random() returns a number between 0 and 1 (excluding 1) - 0.5 will return a number between -0.5 and 0.5 - this will randomly return a positive or negative number - so we it sort can be in ascending or descending order.
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = answer === selectedAnswer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
