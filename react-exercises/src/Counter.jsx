import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue, incrementAmount}){
    const [counter, setCount] = useState(initialValue);

    const increment = () => {
        setCount((prev) => prev + incrementAmount)
    }

    const decrement = () => {
        setCount((prev) => prev - incrementAmount)
    }

    return(
        <div>
            <CounterDisplay counter={counter}/>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    )
}