import { useEffect, useState } from "react";

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: Readonly<ProgressBarProps>) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [progressValue, setProgressValue] = useState(progress);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentProgress(progressValue);
    }, 100);

    return () => clearTimeout(timeout);
  }, [progressValue]);

  return (
    <>
      <h2 className="mt-10 mb-5 flex justify-center items-center text-xl font-bold">
        Progress Bar
      </h2>
      <div className="mb-5 flex justify-center items-center text-md font-normal">
        You can add value between 0 and 100 to see the progress bar.
      </div>
      <div className="flex items-center justify-center flex-col gap-4 w-auto">
        <input
          type="text"
          value={progressValue}
          onChange={(e) => {
            if (
              isNaN(Number(e.target.value)) ||
              Number(e.target.value) < 0 ||
              Number(e.target.value) > 100
            ) {
              return;
            }
            setProgressValue(Number(e.target.value));
          }}
          className="border border-solid border-gray-700 w-20 h-7 rounded-md text-gray-900 p-1"
        />
        <div className="border border-gray-700 border-solid rounded-lg w-96 overflow-hidden">
          <div
            className="bg-blue-500 h-4 rounded-lg"
            style={{
              // If we use width, browser has to repaint again and again
              // width: `${currentProgress}%`,
              transform: `translateX(${currentProgress - 100}%)`,
              transition: "transform 0.6s ease-in-out",
            }}
            //   Adding web accessibility
            //   role="progressbar"
            //   aria-valuenow={progress}
            //   aria-valuemax={100}
            //   aria-valuemin={0}
          />
        </div>
        <div className="text-black text-xs">Completed {currentProgress}%</div>
      </div>
    </>
  );
}
