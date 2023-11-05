import { useState } from "react";

const TodoList = () => {
    const[todo, setTodo] = useState("")
    const[items, setItems] = useState([])

    const handleInput = (input) => {
        setTodo(
            input.target.value
        )
    }
    const awa = () => {
        setItems(prevArr => {
          return [
            ...prevArr,
            todo
          ]
        })
        setTodo('');
      }
    

    return (
        <>
            <input type="text" name="todo" value={todo} onChange={handleInput} />
            <button onClick={awa}>Aggiungi</button>
            {
                items.map(item => <li>{item}</li>)
            }
        </>
    )
}

export default TodoList