import { Button } from "./Button";

export function AlertClock(){
    function handleButtonClick(){
        const currentTime = new Date();

        alert(`The current time is ${currentTime.toLocaleTimeString()}`)
    }

    return (
        <div>
            <p>Click the button to show the current time</p>
            <Button onButtonClick={handleButtonClick}>Show time</Button>
        </div>
    )
}