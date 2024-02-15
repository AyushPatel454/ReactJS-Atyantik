import QuizCompleteImg from "../assets/quiz-complete.png";
import QUESTION from "../questions.js";

export default function Summary({ userAnswers }) {
  // skipped answer array
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  //   correct answer array
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );

  //   percentage of skipped answers.
  const skippedAnswersShares = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  //   percentage of correct answers.
  const correctAnswersShares = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  //   percentage of wrong answers.
  const wrongAnswersShares = 100 - correctAnswersShares - skippedAnswersShares;

  return (
    <div id="summary">
      <img src={QuizCompleteImg} alt="Quiz Completed Img" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShares}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShares}%</span>
          <span className="text">Correct Answers</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShares}%</span>
          <span className="text">Wrong Answers</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
