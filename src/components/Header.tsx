import { useState } from "react";

// Destructing the prop
function Header({propName}:{propName:string}) {

    /* 
        useState is a hook. it's kind of a utility function. this is different from regular variable because this is a dynamic variable. 
        React component re-renders whenever there's a state change. If you update normal variable, the component won't re-render.
    */
    const [name, setName] = useState("Nikita")
    // useState returns an array - 1st is variable, 2nd is modifier function (destructuring). The above can also be written as - 
    /*
        const arr = useState("Nikita")
        const name = arr[0]
        const setName = arr[1]
    */
    let name1 = "VVK";

    return <div>
        <h1>Hello, {propName}!</h1>
        <br></br>
        {/* <button onClick={() => {setName("VVK")}}>Change Name</button> */}
    </div>
}

export default Header;