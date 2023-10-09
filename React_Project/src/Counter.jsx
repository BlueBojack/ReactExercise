import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleAddOne = () => setCounter(counter + 1)
// Preferibilmente dovrebbe essere una funzione rispetto ad una immediate value perchè in questo modo si può usare il
// codice in maniera più dinamica rispetto al value fisso da cambiare ogni volta.        

    return(
        <>
            <h2>{counter}</h2>
            <button onClick={handleAddOne}>Add one to the counter!</button>
        </>
    )
}
export default Counter