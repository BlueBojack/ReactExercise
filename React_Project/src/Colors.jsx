import Color from "./Color"

const Colors = ({ items }) => {
    return (
        <>
            <ul>
                <Color
                items={[
                    {id:1 , name: "Blue"}, 
                    {id:2 , name: "Giallo"}, 
                    {id:3 , name: "Rosa"}, 
                    {id:4 , name: "Nero"},
                    {id:1 , name: "Ocra"}]} />
            </ul>
        </>
    )
}

export default Colors