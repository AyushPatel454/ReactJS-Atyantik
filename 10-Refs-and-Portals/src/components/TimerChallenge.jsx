import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// ---> we can not use timer because it is not a state variable. Means ?? It shared between all other TimerChallenge components. So, we need to use state variable to store the timer value.
// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef(); // this is not lost when component is re-execute that's why we use useRef().
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-Time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : " Timer inactive"}
        </p>
      </section>
    </>
  );
}
