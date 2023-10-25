import { Link, Route, Routes } from "react-router-dom"
import { Counter } from "./components/Counter"
import { ShowGithubUser } from "./components/ShowGithubUser"
import { Welcome } from "./components/Welcome"
import { NotFound } from "./components/NotFound"

function App() {

  return (
    <div>

      <div>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="users/MarcoTassone">Github User</Link>
      </div>
    
    <Routes>
      <Route path="/" element={<Welcome name="Marco"/>}/>
      <Route path="/counter" element={<Counter initialValue={0} incrementAmount={1}/>}/>
      <Route path="users/:username" element={<ShowGithubUser/>}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </div>
  )
}

export default App