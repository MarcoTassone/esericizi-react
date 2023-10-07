import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue, incrementAmount}){
    const [counter, setCount] = useState(initialValue);

    useEffect(() => {
        console.log(`The value of the counter is: ${counter}`);
    }, [counter])

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
            <CounterDisplay counter={counter}/>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}