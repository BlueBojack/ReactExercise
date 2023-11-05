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
        onLogin(data) // here
    }

    const btnBackground = {backgroundColor: data.password.length <= 8 ? 'red' : 'green'};


    return (
        <>
            <form>
                <input name="username" type="text" onChange={handleInputChanges} value={data.username}></input>
                <input name="password" type="password" onChange={handleInputChanges}  value={data.password}></input>
                <input name="checkbox" type="checkbox"onChange={handleInputChanges} value={data.checkbox}></input>
                <button type="submit"  disabled= {isButtonDisabled} onClick={handleLogin} style={btnBackground} disabled={data.username.length <= 0 || data.password.length <= 0 ? true : false}>Login</button>
                <button onClick={handleReset} >Reset</button>
            </form>
        </>
    )
}