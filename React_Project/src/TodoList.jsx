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

    const handleDelete = (index) => {
        setItems(
            (prevArr => prevArr.filter((item, i) => i !== index))
        )
    };
    

    return (
        <>
            <input type="text" name="todo" value={todo} onChange={handleInput} />
            <button onClick={handleAdd}>Aggiungi</button>
            <button onClick={handleReset}>Clear</button>
            {
                items.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                            <button onClick={() => handleDelete(index)}>Remove</button>
                        </li>
                    )
                })
            }
        </>
    )
}

export default TodoList