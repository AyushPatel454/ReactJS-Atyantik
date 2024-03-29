import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
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
    };
  }, [onConfirm]);

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
      <ProgressBar timer={TIMER} />
    </div>
  );
}
