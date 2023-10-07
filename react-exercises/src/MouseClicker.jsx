
export function MouseClicker({name}){

    const handleClick = ((e) => {
        console.log(e.currentTarget.name);
    })

    return <button name={name} onClick={handleClick}><img width={24} height={24} />Click me</button>
}