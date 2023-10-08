import { useState } from 'react'

function App () {

  const sum = (a, b) =>{
    return a + b;
  }

  return (
    <h2>La somma è {sum(10,50)}</h2>
  )
}

export default App