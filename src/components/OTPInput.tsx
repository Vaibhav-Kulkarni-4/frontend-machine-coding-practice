import { useState, useRef, useEffect } from "react";

interface OtpInputProps {
  lengthOfOtp?: number;
}

export default function OTPInput({ lengthOfOtp = 6 }: Readonly<OtpInputProps>) {
  const [inputArray, setInputArray] = useState<(number | string)[]>(
    new Array(lengthOfOtp).fill("")
  );
  const inputRef = useRef<any[]>([]);

  useEffect(() => {
    inputRef.current?.[0]?.focus();
  }, []);

  const onChangeHandler = (e: any, index: number) => {
    if (isNaN(e.target.value)) {
      return;
    }

    const value = e.target.value;
    const newArray = [...inputArray];
    // slice(-1) meaning slice the last character. This is done so that only the last character is considered in the input field
    newArray[index] = value.slice(-1);
    setInputArray(newArray);
    inputRef.current?.[index + 1]?.focus();
  };

  const onChangeHandlerForKeyDown = (event: any, idx: number) => {
    if (idx === 0) {
      return;
    }
    if (event.key === "Backspace" && !event.target.value) {
      const newArray = [...inputArray];
      newArray[idx - 1] = "";
      setInputArray(newArray);
      inputRef.current?.[idx - 1]?.focus();
    }
  };

  return (
    <>
      <h2 className="mt-10 mb-5 flex justify-center items-center text-xl font-bold">
        OTP Input
      </h2>
      <div className="mb-5 px-3 flex justify-center items-center text-md font-normal">
        You can enter a 6-digit OTP in the input fields below. The input will
        automatically focus on the next field after entering a digit, and you
        can use the backspace key to delete the last entered digit. Use would be
        able to add only one digit in each input field. On page load, the first
        input field will be focused.
      </div>
      <div className="flex items-center justify-center gap-4">
        {inputArray.map((_, idx) => {
          return (
            <input
              ref={(input) => (inputRef.current[idx] = input)}
              name={`otp-${idx}`}
              type="text"
              key={idx}
              autoComplete="false"
              className="border border-gray-300 w-10 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              value={inputArray[idx]}
              onChange={(event) => onChangeHandler(event, idx)}
              onKeyDown={(event) => onChangeHandlerForKeyDown(event, idx)}
            />
          );
        })}
      </div>
    </>
  );
}
