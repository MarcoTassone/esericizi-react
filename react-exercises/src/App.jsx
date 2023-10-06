
function App() {

  const sum = (a, b) =>{
    return <h2>{a + b}</h2>
  }

  return (
    <>
      {sum(10, 20)}
    </>
  )
}

export default App