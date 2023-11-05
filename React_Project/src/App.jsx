import { useEffect, useRef } from "react";
import FocusableInput from "./FocusableInput";
import Counter from "./Counter";
import Colors from "./Colors";


const App = () => {
   return (
      <>
        <Colors 
          items={[
            {id:1 , name: "Blue"}, 
            {id:2 , name: "Giallo"}, 
            {id:3 , name: "Rosa"}, 
            {id:4 , name: "Nero"},
            {id:1 , name: "Ocra"}]}/>
      </>
  )
}

export default App;