import  { Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome"
import Counter from "./pages/Counter"
import { ShowGithubUser } from "./pages/ShowGithubUser"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Curtis" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element= {<ShowGithubUser />} />
      </Routes>
    </>
  );
}

export default App;