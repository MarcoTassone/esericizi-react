
export function MouseClicker({name}){

    const handleClick = ((e) => {
        console.log(e.//current
        target.name);
    })

    const handleClickSrc = ((e) => {
        console.log(e.currentTarget.src);
    })

    return <button name={name} onClick={handleClick}><img onClick={handleClickSrc} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiyczgjF56LYPisU5nRhc9D5FEEzebG6e2uQ&usqp=CAU"width={24} height={24} />Click me</button>

    // come ho scritto nell'esercizio percedente, possiamo non mostrare name in console rimuovendo current da e.currentTarget.name, e quindi lasciare e.target.name

}