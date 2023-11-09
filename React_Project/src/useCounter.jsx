import { useState } from "react";

export function useCounter({initialValue}){

const [count, setCount] = useState(initialValue=0)
    
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

    return {count, handleIncrease, handleDecrease, handleReset}
}