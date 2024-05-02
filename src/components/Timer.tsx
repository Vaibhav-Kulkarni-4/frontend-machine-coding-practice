import { useState, useRef } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  // useRef is a React Hook that lets you reference a value that’s not needed for rendering. Changing a ref does not trigger a re-render
  const intervalRef = useRef<any>(null);
  const isTimerStopped = useRef(false);

  function startTimer() {
    if (isTimerStopped.current) {
      setSeconds(0);
    }
    const intervalId = setInterval(() => {
      setSeconds((prevSec) => prevSec + 1);
    }, 1000);
    intervalRef.current = intervalId;
  }

  function pauseTimer() {
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
  }

  function stopTimer() {
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
    isTimerStopped.current = true;
  }

  return (
    <>
      <h2 className="mt-10 flex justify-center items-center text-xl font-bold">
        Timer
      </h2>
      <div className="mt-5 flex justify-center items-center text-xl font-bold">
        <h1>{seconds}</h1>
      </div>
      <div className="mt-4 flex justify-center items-center text-lg font-bold">
        <button
          type="button"
          onClick={startTimer}
          className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Start Timer
        </button>
        <button
          type="button"
          onClick={pauseTimer}
          className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Pause Timer
        </button>
        <button
          type="button"
          onClick={stopTimer}
          className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Stop Timer
        </button>
      </div>
    </>
  );
}
