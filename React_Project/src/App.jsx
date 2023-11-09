import  { Routes, Route} from "react-router-dom";
import Welcome from "./Welcome"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Curtis" />} />
      </Routes>
    </>
  );
}

export default App;