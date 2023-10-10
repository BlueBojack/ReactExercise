import Counter from "./Counter"
import { useState } from "react";


const App = () => {

    const [counter, setCounter] = useState(0);

    const handleAddOne = () => setCounter(counter + 1)

    return(
            <>
                <Counter counter={counter} setCounter={handleAddOne}/>
             </>
    )   
}

export default App