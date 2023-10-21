import { useState } from "react";

export function useControlledForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameInputChange(e){
        setUsername(e.target.value);
    }
    
    function handlePasswordInputChange(e){
        setPassword(e.target.value);
    }

    return{
        username: username,
        password: password,
        onUsernameChange: handleUsernameInputChange,
        onPasswordChange: handlePasswordInputChange
    }
}