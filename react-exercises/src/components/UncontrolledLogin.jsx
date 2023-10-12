import { useState } from "react";

export function UncontrolledLogin(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault()

        const formData = {
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
        };
            
        console.log(formData);
    }

    // non è un corretto modo di accedere ai valori perché si può arrivare a bug e comportamenti "strani"
    // lo standard sarebbe lasciare a react gestire gli eventi e gli stati
    // per API non standard non ce ne sono molte ma è consigliato usare gli standard dati da react

    return(
    <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label>Password: </label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
    </form>
    )
}