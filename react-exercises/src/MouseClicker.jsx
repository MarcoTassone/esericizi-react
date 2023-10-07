
export function MouseClicker({name}){

    const handleClick = ((e) => {
        console.log(`${e.target.name}`);
    })

    return <button name={name} onClick={handleClick}>Click me</button>
}