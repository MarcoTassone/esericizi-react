import { useParams } from "react-router-dom"

export function GithubUserList(){
    const {username} = useParams();

    return(
        <div>
            <h3>User {username}</h3>
        </div>
    )
}