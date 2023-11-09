import React, { useState } from "react";
import FilteredList from "./FilteredList";


function App() {

  const people = [
    { id: 1, name: "Curtis", age: 24 },
    { id: 2, name: "Giancarlo", age: 70 },
    { id: 3, name: "Flavio", age: 43 },
    { id: 4, name: "Giuseppe", age: 90 },
    { id: 5, name: "Giada", age: 27 },
    { id: 6, name: "Monica", age: 65 },
  ];

  return (
    <>
        <FilteredList  list={people}/>
    </>
  );
}

export default App;