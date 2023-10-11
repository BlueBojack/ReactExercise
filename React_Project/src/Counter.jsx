import CounterDisplay from "./CounterDisplay"
import { useState } from "react";
import { useEffect } from "react";

const Counter = (props) => {

    const [count, setCount] = useState(props.reset)
  
    const handleIncrease = () =>{
        setCount(
            count + props.value
        )
    }

    const handleDecrease = () =>{
        setCount(
            count - props.value
        )
    }

    const handleReset = () =>{
        setCount(props.reset)
    }

    useEffect(() => {
        console.log(count)
    }
    ), [count]
    
    return(
        <> 
            < CounterDisplay counter = {count} />
            <button onClick={handleIncrease}>Increase the counter</button>
            <button onClick={handleDecrease}>Decrease the counter</button>
            <button onClick={handleReset}>Reset the counter</button>
            
        </>
    )
}
export default Counter