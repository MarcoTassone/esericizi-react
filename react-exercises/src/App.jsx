import { Link, Route, Routes } from "react-router-dom"
import { GithubUser } from "./components/GithubUser"

function App() {

  return (
    <div>

    <Link to="user">Github user</Link>

    <Routes>
      <Route path="user" element={<GithubUser/>}/>
    </Routes>
    </div>
  )
}

export default App