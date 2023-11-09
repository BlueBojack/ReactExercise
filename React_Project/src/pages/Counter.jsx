import { Link } from "react-router-dom"
import CounterDisplay from "../CounterDisplay"
import { useCounter } from "../useCounter"

const Counter = () => {
    const {count, handleIncrease, handleDecrease, handleReset} = useCounter(0)
    
    return(
        <> 
            <div>
                <CounterDisplay counter = {count} />
                <button onClick={handleIncrease}>Increase the counter</button>
                <button onClick={handleDecrease}>Decrease the counter</button>
                <button onClick={handleReset}>Reset the counter</button>
            </div>
            <Link to="/">Home</Link>
        </>
    )
}
export default Counter