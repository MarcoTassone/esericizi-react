import { useState } from "react";

export function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameInputChange(e){
        setUsername(e.target.value);
    }
    
    function handlePasswordInputChange(e){
        setPassword(e.target.value);
    }

    function onLogin(e){
        e.preventDefault();
        if (username && password) {
            setUsername(username)
            setPassword(password)
        }
    }

    function resetState(){
        setUsername('')
        setPassword('')
    }

    return (
        <>
            <form onSubmit={onLogin}>
                <label>Username:</label>
                <input type="text" name="username" onChange={handleUsernameInputChange}/>
                <label>Password:</label>
                <input type="password" name="password" onChange={handlePasswordInputChange}/>
                <button disabled={!username || !password}>Login</button>
                <button onClick={resetState}>Reset</button>  
                 {/*lascio il reset giusto per "dimostrare" che grazie al preventDefault il reset non funziona */}
            </form>
        </>
        )
}