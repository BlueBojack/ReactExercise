export function UncontrolledLogin (){
    function handleSubmit(event) {
        event.preventDefault()

    {/*const username = event.target.elements.namedItem("username").value
    const password = event.target.elements.namedItem("password").value
    const remember = event.target.elements.namedItem("remember").checked */}

    const username = event.target.username.value
    const password = event.target.password.value
    const remember = event.target.remember.checked

        const data1 = {
            username,
            password,
            remember
        }

        console.log(data1);

    }

    const formData = new FormData(event.target)

        const data2 = {
            username: formData.get("username"),
            password: formData.get("password"),
            remember: formData.get("remember") === "on" ? true : false
        }
 // Svantaggi:

    /* Potrebbe non funzionare con browser più vecchi */

// Vantaggi:

    /* E' molto più semplice da utilizzare e riesce a gestire form complessi */
        console.log(data2);

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="username" />
                <input name="password" type="password"/>
                <input name="remember" type="checkbox" />
                <button>Login</button>
                <button type="reset">Reset</button>
            </form>
        </>
    )
