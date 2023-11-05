import { useState } from "react";

const TodoList = () => {
    const[todo, setTodo] = useState("")
    const[items, setItems] = useState([])

    const handleInput = (input) => {
        setTodo(
            input.target.value
        )
    }
    const handleAdd = () => {
        setItems(prevArr => {
          return [
            ...prevArr,
            todo
          ]
        })
        setTodo('');
      }

    const handleReset = () => {
        setItems([])
    }
    

    return (
        <>
            <input type="text" name="todo" value={todo} onChange={handleInput} />
            <button onClick={handleAdd}>Aggiungi</button>
            <button onClick={handleReset}>Clear</button>
            {
                items.map(item => <li>{item}</li>)
            }
        </>
    )
}

export default TodoList