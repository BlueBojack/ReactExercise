import CounterDisplay from "./CounterDisplay"
import { useState, useEffect, useRef } from "react";

const Counter = ({initialValue}) => {
    const [count, setCount] = useState(initialValue)
    const directionRef = useRef(null);
    
    const handleIncrease = () =>{
        setCount(
            count + 1
        )
    }

    const handleDecrease = () =>{
        setCount(
            count - 1
        )
    }

    const handleReset = () =>{
        setCount(initialValue)
    }

    useEffect(() => {
        const direction = count > initialValue ? 'Up' : count < initialValue ? 'Down' : null;
        const prevDirection = directionRef.current;
    
        if (direction !== prevDirection) {
          console.log(direction)
        }
    
        directionRef.current = direction;
      }, [count])
    
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