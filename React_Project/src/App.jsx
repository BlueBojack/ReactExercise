import { useEffect, useRef } from "react";
import FocusableInput from "./FocusableInput";
import Counter from "./Counter";
import Colors from "./Colors";


const App = () => {
   return (
      <>
        <Colors items={["Blue", "Giallo", "Rosa", "Nero", "Ocra"]}/>
      </>
  )
}

export default App;