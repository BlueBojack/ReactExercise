const MouseClicker =  (props) => {

    const handleClick = (event) => {
        console.log(event.target.name)
    }

    return(
        <>
            <button name={props.name} onClick={handleClick} >
                 <img src="src\assets\react.svg" />
                  Click
            </button>
        </>
    )
}

export default MouseClicker;