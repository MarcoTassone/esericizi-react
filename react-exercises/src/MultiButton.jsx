export function MultiButton(){

    const handleClick = ((e) => {
        console.log(e.target.name);
    })

    return (
        <div>
            <button name="one" onClick={handleClick}>One</button>
            <button name="two" onClick={handleClick}>Two</button>
            <button name="three" onClick={handleClick}>Three</button>
        </div>
    )
}