import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){

    const { data, onFetchUser } = useGithubUser(username)

    function handleGetUserData(){
        onFetchUser(username)
    }

    return(
        <div>
            <button onClick={handleGetUserData}>Get user</button>
            {data && <h1>{data.login}</h1>}
            {data && <img src={data.avatar_url}/>}
            {data && <h1>{data.name}</h1>}
            {/* purtroppo il name non viene mostrato perché è null */}
        </div>
    )
}