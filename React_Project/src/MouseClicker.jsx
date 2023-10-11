const MouseClicker =  (props) => {

    const handleClick = (event) => {
        console.log(event.target.name)
    }

    const handleImgClick = (event) => {
        console.log(event.currentTarget.src)
    }

    return(
        <>
            <button name={props.name} onClick={handleClick} >
                 <img src="src\assets\react.svg" onClick={handleImgClick} />
                  Click
            </button>
        </>
    )
}
// I will avoid that by gibing the img tag an event that targets itself.
export default MouseClicker;