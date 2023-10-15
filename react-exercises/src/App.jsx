import { Login } from "./components/Login"

function App() {

  const handleLogin = (data) =>{
    console.log(data);
  }

  return (
    <>
      <Login onLogin={handleLogin}/>
    </>
  )
}

export default App