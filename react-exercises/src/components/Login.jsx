import { useState } from "react";

export function Login({onLogin}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    
    function handleUsernameInputChange(e){
        setUsername(e.target.value);
    }
    
    function handlePasswordInputChange(e){
        setPassword(e.target.value);
    }
    
    function handleLogin(){
        if (username && password) {
            onLogin({username, password})
        }
    }

    function handlCheckedInputChange(e){
        setCheckbox(e.target.checked);
    }

    function resetState(){
        setUsername('')
        setPassword('')
        setCheckbox('')
    }

    return (
    <>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={handleUsernameInputChange}/>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={handlePasswordInputChange}/>
        <input type="checkbox" checked={checkbox} name="checkbox" onChange={handlCheckedInputChange}/>
        <button onClick={handleLogin} disabled={!username || !password}>Login</button>
        <button onClick={resetState}>Reset</button>
    </>
    )
}