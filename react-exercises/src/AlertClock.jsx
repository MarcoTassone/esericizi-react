
export function AlertClock(){
    function handleButtonClick(){
        const currentTime = new Date();

        alert(`The current time is ${currentTime}`)
    }

    return (
        <div>
            <p>Click the button to show the current time</p>
            <button onClick={handleButtonClick}>Show time</button>
        </div>
    )
}