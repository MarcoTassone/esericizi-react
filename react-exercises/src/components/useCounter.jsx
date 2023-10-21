import { useState } from "react";

export function useCounter(initialValue = 0){
    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter((prev) => prev + 1)
    }
    
    const decrement = () => {
        setCounter((prev) => prev - 1)
    }
    
    const reset = () => {
        setCounter(initialValue)
    }

    return{
        counter: counter,
        onIncrement: increment,
        onDecrement: decrement,
        onReset: reset,
    }
}
