import { useEffect, useState } from "react";

export function GithubUser(){
    const [users, setUsers] = useState([])
    const [selectUser, setSelectUser] = useState();

    function handleSelectedUser(username){
        setSelectUser(username)
    }
    
    async function fetchGithubUsers(){
        try {
            const result = await fetch(`https://api.github.com/users`);
            const json = await result.json();
            setUsers(json)
            console.log(json);
        } catch (error) {
            console.error(error);
            setUsers(null)
        }  
    }

    useEffect(() => {
        fetchGithubUsers()
    }, []);

    return(
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.login} onClick={handleSelectedUser}>{user.login}</li>
                ))}
                {selectUser && <GithubUser username={selectUser}/>}
            </ul>
        </div>
    )
}