import { useState } from "react";

export function useGithubUser(){
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

    return { data, onFetchUser: fetchGithubUsers }
}
