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
                <img src="src\assets\react.svg"  onClick={handleImgClick}/>
                Click
            </button>
        </>
    )
}

export default MouseClicker;


/* Se viene cliccata l'immagine vengono printati entrambi, mentre se viene clickato solo il bottone viene printato solo il nome*/