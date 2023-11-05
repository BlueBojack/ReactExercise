import { useEffect, useRef } from "react";
import FocusableInput from "./FocusableInput";
import Counter from "./Counter";
import Colors from "./Colors";
import TodoList from "./TodoList";
import Welcome from "./Welcome"


const App = () => {
   return (
      <>
        <Counter initialValue={33}/>
      </>
  )
}

export default App;