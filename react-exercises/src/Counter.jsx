import { useState } from "react";

export function Counter(){
    const [counter, setCount] = useState(0);

    const addOne = () => {
        setCount((prev) => prev + 1)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={addOne}>Add</button>
        </div>
    )
}