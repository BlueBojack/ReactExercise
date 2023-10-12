import { useState } from "react"
import Welcome from "./Welcome"

export default function InteractiveWelcome() {

    const[name, setName] = useState("");

    const handleTextInput = (event) => {
        setName(event.target.value);
    }
    
    return (
        <>
            <form>
                <input type="text" onChange={handleTextInput} value={name} />
            </form>
            < Welcome name={name} />
        </>
    )
}