import { Link, Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import { GithubUserList } from "./components/GithubUserList"
import { ShowGithubUser } from "./components/ShowGithubUser"
import { Welcome } from "./components/Welcome"
import { NotFound } from "./components/NotFound"

function App() {

  return (
    <div>
      <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="users">Github User</Link>
      </div>
    
    <Routes>
      <Route path="/" element={<Welcome name="Marco"/>}/>
      <Route path="/counter" element={<Counter initialValue={0} incrementAmount={1}/>}/>
      <Route path="users" element={<ShowGithubUser />}>
        <Route index element={<p>Add a user and select it</p>}/>
        <Route path=":username" element={<GithubUserList />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </div>
  )
}

export default App