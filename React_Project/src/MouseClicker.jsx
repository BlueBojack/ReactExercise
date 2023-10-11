const MouseClicker =  (props) => {

    const handleClick = (event) => {
        console.log(event.target.name)
    }

    return(
        <>
            <button name={props.name} onClick={handleClick}>Click</button>
        </>
    )
}

export default MouseClicker;