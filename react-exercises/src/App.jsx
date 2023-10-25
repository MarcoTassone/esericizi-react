import { Route, Routes } from "react-router-dom"
import { ShowGithubUser } from "./components/ShowGithubUser"
import { Counter } from "./components/Counter"
import { Welcome } from "./components/Welcome"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Welcome name="Marco"/>}/>
      <Route path="/counter" element={<Counter initialValue={0} incrementAmount={1}/>}/>
      <Route path="users/:username" element={<ShowGithubUser/>}/>
    </Routes>
  )
}

export default App