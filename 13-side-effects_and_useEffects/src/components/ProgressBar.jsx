import {useState, useEffect} from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

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
    };
  }, []);

  // return Progressbar element.
  return <progress value={remainingTime} max={timer} />;
}
