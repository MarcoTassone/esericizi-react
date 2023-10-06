
function App() {

  const name = (name) => {
    return <h1>Hello, {name}</h1>
  }

  return (
    <>
      {name()}
    </>
  )
}

export default App