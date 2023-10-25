import { Link, useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
    const {username} = useParams()

    return(
        <div>
            <GithubUser username={username}/>
            <Link to="MarcoTassone">Marco Tassone</Link> <Link to="GiuseppeTassone">Giuseppe Tassone</Link>
        </div>
    )
}