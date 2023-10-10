const Counter = ({counter, setCounter}) => {

    return(
        <>
            <h2>{counter}</h2>
            <button onClick={setCounter}>Add one to the counter!</button>
        </>
    )
}
export default Counter