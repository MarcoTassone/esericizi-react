import { Link, Outlet, useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export function GithubUser(){
    const { username } = useParams()
    const { user, error, isLoading, onRefresh } = useGithubUser(username);

    function handleUserData(){
        onRefresh()
    }

    return(
        <div>
            <button onClick={handleUserData}>Refresh</button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>An error has occured</h3>}
            {user && (
                <ul>
                {user.map((user) => (
                    <li key={user.login}><Link to={`/users/${user.login}`}>{user.login}</Link></li>
                ))}
                </ul>
            )}

            <Outlet/>
        </div>
    )
}