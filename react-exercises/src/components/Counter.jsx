import { useEffect, useRef, useState } from "react";

export function Counter({initialValue}){
    const [counter, setCounter] = useState(initialValue)

    const inputRef = useRef(initialValue);

    useEffect(() => {
        const direction = counter > inputRef.current ? "up" : "down";

        inputRef.current = counter;

        console.log(direction);
    },[counter])

    function up(){
        setCounter((prev) => prev + 1)
    }

    function down(){
        setCounter((prev) => prev - 1)
    }

    return(
        <>
            <h2>{counter}</h2>
            <button onClick={up}>Up</button>
            <button onClick={down}>Down</button>
        </>
    )
}