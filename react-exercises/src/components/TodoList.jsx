import { useState } from "react";

export function TodoList(){
    const [item, setItem] = useState([]);
    const [newItem, setNewItem] = useState('')

    function handleInputChange(e){
        setNewItem(e.target.value)
    }

    function addItem(){
        setItem([...item, newItem])
        setNewItem('')
    }

    function resetItem(){
        setItem([])
    }

    return(
        <div>
            <h4>Todo list</h4>
            <ul>
                {item.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <input type="text" value={newItem} onChange={handleInputChange}/>
            <button onClick={addItem}> Add item</button>
            <button onClick={resetItem}>Reset</button>
        </div>
    )
}