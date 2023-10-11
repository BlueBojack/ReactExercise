import Counter from "./Counter"
import { useState } from "react";
import { Clock } from "./Clock";
import MouseClicker from "./MouseClicker"; 


const App = () => {

    return(
            <>
                <Counter value ={5} reset={69}/>
                <Clock />
                <MouseClicker name="one"/>
             </>
    )   
}

export default App