import { useState } from "react"

export function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [checkbox, setCheckbox] = useState(false)

    function handleUsernameInputChange(e){
        setUsername(e.target.value);
    }

    function handlePasswordInputChange(e){
        setPassword(e.target.value);
    }
    
    function handlCheckedInputChange(e){
        setCheckbox(e.target.checked);
    }

    console.log(username);
    console.log(password);
    console.log(checkbox);

    return(
        <>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={handleUsernameInputChange}/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePasswordInputChange}/>
        <input type="checkbox" checked={checkbox} name="checkbox" onChange={handlCheckedInputChange}/>
        </>
        
        
    )
}