import { useState } from "react";

export function useGithubUser(){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    async function fetchGithubUsers(username){
        setLoading(true)
        setError(null)
        try {
            const result = await fetch(`https://api.github.com/users/${username}`);
            const json = await result.json();
            setData(json)
            console.log(json);
        } catch (error) {
            setError(error)
            setData(null)
        } finally{
            setLoading(false)
        }
    }

    return { data, error, loading, onFetchUser: fetchGithubUsers }
}
