export function UncontrolledLogin(){
    return(
    <form>
        <label>Username: </label>
        <input type="text" name="username"/>
        <label>Password: </label>
        <input type="password" name="password"/>
        <input type="checkbox" name="checkbox" />
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
    </form>
    )
}