import { Age } from "./Age"

export function Welcome(name){
    return (
    <>
        <p>Welcome, {name.prop}</p>
        <Age age={22}/>
    </>
    )
}