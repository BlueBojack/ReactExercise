import { useState } from 'react'

function App () {
  const sayHello = (name) =>{
    return <h1>Hello, {name}!</h1>
  }

    return  (<>
              {sayHello()}
            </>)
}
// Senza dare un parametro a Say hello verrà printato solo "Hello, ! senza il nome"
export default App
