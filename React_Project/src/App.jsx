import  { Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome"
import Counter from "./pages/Counter"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Curtis" />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;