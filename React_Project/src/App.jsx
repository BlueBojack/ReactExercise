import Counter from "./Counter"
import { useState } from "react";
import { Clock } from "./Clock";


const App = () => {

    return(
            <>
                <Counter value ={5} reset={69}/>
                <Clock />
             </>
    )   
}

export default App