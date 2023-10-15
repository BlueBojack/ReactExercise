import { useState } from "react"

export default function Login() {

    const [data, setData] = useState({
        username:"",
        password:"",
        checkbox:false
    })

    const handleInputChanges = (event) => {
       const username = event.target.value
       const value = event.target.type === "checkbox" ? event.target.checked :  event.target.value;

       setData(data => {
        return {
            ...data,
            [username]: value
        }
    })

    }

    
    return (
        <>
            <form>
                <input name="username" type="text" onChange={handleInputChanges} value={data.username}></input>
                <input name="password" type="password" onChange={handleInputChanges}  value={data.password}></input>
                <input name="checkbox" type="checkbox"onChange={handleInputChanges} value={data.checkbox}></input>
            </form>
        </>
    )
}