import { useState } from "react"

export function InteractiveWelcome(){
    const [name, setName] = useState("")

    function handleNameInputChange(e){
        setName(e.target.value);
    }

    console.log(name);

    return(
        <input type="text" name="name" value={name} onChange={handleNameInputChange}/>
    )
}