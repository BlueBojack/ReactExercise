import { useState } from "react"

export default function Login({onLogin}) {

    const [data, setData] = useState({
        username:"",
        password:"",
        checkbox:false
    })

    const handleInputChanges = (event) => {
       const username = event.target.name;
       const value = event.target.type === "checkbox" ? event.target.checked :  event.target.value;

       setData(data => {
        return {
            ...data,
            [username]: value
        }
    })

    }

    const isButtonDisabled = data.username === '' || data.password === '';


    const handleReset = () => {
        setData(
            {
                username:"",
                password:"",
                checkbox:false
            }
        )
    }

    const handleLogin = (event) => {
        event.preventDefault()
        onLogin(data)
    }

    return (
        <>
            <form>
                <input name="username" type="text" onChange={handleInputChanges} value={data.username}></input>
                <input name="password" type="password" onChange={handleInputChanges}  value={data.password}></input>
                <input name="checkbox" type="checkbox"onChange={handleInputChanges} value={data.checkbox}></input>
                <button  disabled= {isButtonDisabled} onClick={handleLogin}>Login</button>
                <button onClick={handleReset} >Reset</button>
            </form>
        </>
    )
}