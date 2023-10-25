import { useEffect, useState } from "react";

export function GithubUser({username}){
    const [data, setData] = useState(null)
    
    async function fetchGithubUsers(username){
        try {
            const result = await fetch(`https://api.github.com/users/${username}`);
            const json = await result.json();
            setData(json)
            console.log(json);
        } catch (error) {
            console.error(error);
            setData(null)
        }  
    }

    useEffect(() => {
        fetchGithubUsers(username)
    }, [username]);

    return(
        <div>
            {data && <h1>{data.login}</h1>}
        </div>
    )
}