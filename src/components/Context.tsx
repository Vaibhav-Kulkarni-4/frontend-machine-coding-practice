/*

Context API - Suppose we have a component that needs to access some global state or functions, we can use the Context API to provide that data to the component tree without having to pass props down manually at every level (avoid prop-drilling). We need to wrap our component tree with a ContextProvider and then use the useContext hook to access the context data in any component.

Step 1: Create a context using createContext
Step 2: Use the context in a component using useContext hook


*/
import { useContext } from "react";
import Counter from "./Counter";
import { CounterContext } from "../context/CounterContext";

function Context() {
  // Step 2: Use the context in a component using useContext hook
  const counterContext = useContext(CounterContext);

  console.log("Context", counterContext.count);

  return (
    <div className="text-center">
      <h2 className="mt-10 flex justify-center items-center text-xl font-bold">
        Context API
      </h2>
      <h1>Count is {counterContext?.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
export default Context;
