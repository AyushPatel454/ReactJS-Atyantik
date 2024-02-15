import { useEffect, useState  } from "react";

const TIMER = 3000; 

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  
  const [remainingTime, setRemainingTime] = useState(TIMER);

  // useEffect is used to perform side effects in function components.
  // delete the selected place after 3 seconds.
  useEffect(() => {
    console.log("Timer is start");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    // clean up function.
    // That will be called when the component is unmounted.
    return () => {
      console.log("clean up");
      clearTimeout(timer);
    }
  },[onConfirm]);

  // ---> this useEffect is used to update the remaining time every 10 milliseconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    // clean up function.
    // That will be called when the component is unmounted.
    // (when the component is removed from the DOM that time stop the interval)
    return () => {
      console.log("clean up - Interval");
      clearInterval(interval);
    }
  }, []);
  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* Display progress bar. */}
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
