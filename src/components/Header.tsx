import { useState } from "react";

// Destructing the prop
function Header({ propName }: { propName: string }) {
  /* 
        useState is a hook. it's kind of a utility function. this is different from regular variable because this is a dynamic variable. 
        React component re-renders whenever there's a state change. If you update normal variable, the component won't re-render.
    */
  const [name, setName] = useState(propName);
  // useState returns an array - 1st is variable, 2nd is modifier function (destructuring). The above can also be written as -
  /*
        const arr = useState("Nikita")
        const name = arr[0]
        const setName = arr[1]
    */

  return (
    <div className="text-center">
      <h1>Hello, {name}!</h1>
      <button
        onClick={() => {
          const nawName = prompt("Enter your name");
          if (!nawName) return;
          setName(nawName);
        }}
        className="bg-blue-500 text-white px-2 py-1 rounded-md"
      >
        Change Name
      </button>
    </div>
  );
}

export default Header;
