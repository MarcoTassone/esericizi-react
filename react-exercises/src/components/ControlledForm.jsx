import { useControlledForm } from "./useControlledForm"

export function ControlledForm(){

    const {username, password, onUsernameChange, onPasswordChange } = useControlledForm()

    return (
        <>
            <form>
                <label>Username:</label>
                <input type="text" name="username" onChange={onUsernameChange}/>
                <label>Password:</label>
                <input type="password" name="password" onChange={onPasswordChange}/>
                <button disabled={!username || !password}>Login</button>
            </form>
        </>
        )
}