import { useGithubUser } from "./useGithubUser";

export function GithubUser(){
    const { user, error, isLoading } = useGithubUser();

    return(
        <div>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>An error has occured</h3>}
            {user && (
                <ul>
                {user.map(user => (
                    <li key={user.login}>{user.login}</li>
                ))}
                </ul>
            )}
        </div>
    )
}