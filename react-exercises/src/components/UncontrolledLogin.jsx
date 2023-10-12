export function UncontrolledLogin(){
    
    function handleSubmit(e){
        e.preventDefault()
    
        const formData = new FormData(e.target)

        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }
        
        console.log(data);
    }
    

    return(
    <form onSubmit={handleSubmit}>
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