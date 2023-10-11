import Counter from "./Counter"
import { Clock } from "./Clock";
import MouseClicker from "./MouseClicker"; 
import MultiButton from "./MultiButton";


const App = () => {

    return(
            <>
                <Counter value ={5} reset={69}/>
                <Clock />
                <MouseClicker name="one"/>
                <MultiButton firstName={"one"} secondName="two" thirdName="three" />
             </>
    )   
}

export default App