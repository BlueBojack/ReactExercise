import AlertClock from "./AlertClock"



const App = () => {

    const handleClock = () => {
        alert(new Date().toLocaleDateString());
    }

    return (
        <>
            <AlertClock onClick={handleClock} />
        </>
    )
}
export default App