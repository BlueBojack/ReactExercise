function AlertClock() {
    const handleClock = () => {
        alert(new Date().toLocaleDateString());
    }

    return (
        <>
            <button onClick={handleClock}>Click for the current date</button>
        </>
    )
}

export default AlertClock