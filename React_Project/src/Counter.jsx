import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleAddOne = () => setCounter(counter + 1)
        

    return(
        <>
            <h2>{counter}</h2>
            <button onClick={handleAddOne}>Add one to the counter!</button>
        </>
    )
}
export default Counter