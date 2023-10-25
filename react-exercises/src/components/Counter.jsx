import { useState } from "react";

export function Counter({initialValue, incrementAmount}){
    const [counter, setCount] = useState(initialValue);

    const increment = () => {
        setCount((prev) => prev + incrementAmount)
    }

    const decrement = () => {
        setCount((prev) => prev - incrementAmount)
    }

    const reset = () => {
        setCount(initialValue)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}