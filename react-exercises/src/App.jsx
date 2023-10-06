
function App() {

  const name = (name) => {
    return <h1>Hello, {name}</h1>
  }

  return (
    <>
      {name(<h1>Marco</h1>)}
    </>
  )
}

export default App