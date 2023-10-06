import { Age } from "./Age"

export function Welcome({name, age}){
    return (
    <>
        <p>Welcome, {name}</p>
        {name==="John" && age > 18 && age < 65 && <Age age={age}/>}
    </>
    )
}