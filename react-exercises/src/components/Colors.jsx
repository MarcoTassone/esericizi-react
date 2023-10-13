export function Colors({ items }){

    return(
        <ul>
            {items.map((color) => 
            <li>{color}</li>
            )}
        </ul>
    )
}