import { useState, useEffect } from "react";

export default function PingPongTimer() {
  const [count, setCount] = useState(1);
  const [isIncrementing, setIsIncrementing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (isIncrementing) {
          if (prev === 20) {
            setIsIncrementing(false);
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev === 1) {
            setIsIncrementing(true);
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 1000); // runs every second

    return () => clearInterval(interval);
  }, [isIncrementing]);

  return (
    <>
      <h2 className="mt-10 mb-5 flex justify-center items-center text-xl font-bold">
        Ping Pong Timer
      </h2>
      <div className="flex flex-col items-center gap-4">
        <div className="text-4xl">{count}</div>
      </div>
    </>
  );
}
