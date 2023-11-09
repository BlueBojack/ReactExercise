import { useState, useCallback } from "react";

export function useCounter({initialValue}){

const [count, setCount] = useState(initialValue=0)
    
    const handleIncrease = useCallback(() => {
        setCount((c) => c + 1);
      }, []);

    const handleDecrease = useCallback(() => {
        setCount((c) => c - 1);
      }, []);

    const handleReset = useCallback(() => {
        setCount(0);
      }, []);

    return {count, handleIncrease, handleDecrease, handleReset}
}