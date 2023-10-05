import { Hello } from "./components/Hello"
import { Message } from "./components/Message"

function App() {

  return (
    <>
      <Hello />
      <Message />
    </>
  )
}

export default App

// sì si può importare Message direttamente su App e succede la stessa cosa di quando lo si renderizza su Hello