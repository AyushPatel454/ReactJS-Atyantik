import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// ---> we can not use timer because it is not a state variable. Means ?? It shared between all other TimerChallenge components. So, we need to use state variable to store the timer value.
// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(); // this is not lost when component is re-execute that's why we use useRef().
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000); // reset the time But it is not make loop because we are in the if block.
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10); // 10ms
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-Time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : " Timer inactive"}
        </p>
      </section>
    </>
  );
}
