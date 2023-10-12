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

    // Vantaggi: 1.facilità la costruzione e la gestione dei dati 2.può gestire i file allegati ai form 3.compatibilità 4.integrazione del fetch API 5.costruzione di form dinamici
    // Svantaggi: 1.è limitato alla semplicità, ovvero per form più complessi è meglio usare gli state e controlled components di react 2. non è reactive 3.complesso per casi più semplici
    // 4. mancanza di validazione interna, ovvero per validare gli input è da fare separatamente 5. compatibilità con vecchi browser, è supportato maggiormente su browser nuovo

    return(
    <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" name="username"/>
        <label>Password: </label>
        <input type="password" name="password"/>
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
    </form>
    )
}