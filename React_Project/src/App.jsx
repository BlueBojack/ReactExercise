import  { Routes, Route, Link} from "react-router-dom";
import Welcome from "./pages/Welcome"
import Counter from "./pages/Counter"
import { ShowGithubUser } from "./pages/ShowGithubUser"
import NotFound from "./pages/NotFound";
import GithubUserList from "./pages/GithubUsersList";



function App() {

  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/users/bluebojack'>GithubUser</Link>
      </nav>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Welcome name="Curtis" />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>  
        <Route path="/counter" element={<Counter />} />
        <Route path="users/:username" element= {<ShowGithubUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;