import { Welcome } from "./components/Welcome"

function App() {

  const name = <strong>Marco</strong>

  return (
    <>
      <Welcome prop={name}/>
    </>
  )
}

export default App