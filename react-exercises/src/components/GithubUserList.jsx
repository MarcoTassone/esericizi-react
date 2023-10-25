import { Link, useParams } from "react-router-dom"

export function GithubUserList(){
    const {username} = useParams();

    return(
        <div>
            <h2> User {username}</h2>
            <Link to="/users">Back</Link>
        </div>
    )
}