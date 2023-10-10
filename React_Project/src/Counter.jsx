import CounterDisplay from "./CounterDisplay"

const Counter = ({counter, setCounter}) => {

    return(
        <>
            <CounterDisplay counter={counter} />
            <button onClick={setCounter}>Add one to the counter!</button>
        </>
    )
}
export default Counter