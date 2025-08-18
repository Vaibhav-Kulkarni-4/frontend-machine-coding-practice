import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Counter() {
  const counterContext = useContext(CounterContext);
  return (
    <div className="flex justify-center items-center gap-4 mt-5">
      <button
        type="button"
        className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        onClick={() => counterContext.increment()}
      >
        Increment
      </button>
      <button
        type="button"
        className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        onClick={() => counterContext.decrement()}
      >
        Decrement
      </button>
    </div>
  );
}
export default Counter;
