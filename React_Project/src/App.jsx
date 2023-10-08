import { useState } from 'react'

function App() {

  const sayHello = (name) => {
    return (`Hello, ${name}!`)
  };
  const jsxExpression = <h1>Curtis</h1>

  return (
    <>
      {sayHello(jsxExpression)}
    </>
  )
}

// Riporterà [object, object] invece che il vero contenuto

export default App