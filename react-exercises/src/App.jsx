import { Clock } from "./Clock"
import { Counter } from "./Counter"

function App() {

  return (
    <>
      <Counter initialValue={0} incrementAmount={1}/>

      <Clock />
    </>
  )
}

export default App