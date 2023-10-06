import { Age } from "./Age"

export function Welcome({name, age}){
    return (
    <>
        <p>Welcome, {name}</p>
        {age ? <Age age={age}/> : <h1>Ciao</h1>}    
    </>
    )
}