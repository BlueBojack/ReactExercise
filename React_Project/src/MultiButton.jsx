const MultiButton = ({firstName, secondName, thirdName}) => {

    const handleClick = (event) => {
        console.log(event.target.name)
    }

return(
    <>
    <div>
        <button name={firstName} onClick={handleClick}>
            One
        </button>
        <button name={secondName} onClick={handleClick}>
            Two
        </button>
        <button name={thirdName} onClick={handleClick}>
            Three
        </button>
    </div>
    </>
)

}

export default MultiButton;