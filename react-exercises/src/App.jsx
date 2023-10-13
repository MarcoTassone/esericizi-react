import { Colors } from "./components/Colors"

function App() {

  return (
    <>
      <Colors items={[
        {id: 1, name: 'white'},
        {id: 2, name: 'black'},
        {id: 3, name: 'brown'},
        {id: 4, name: 'purple'},
        {id: 5, name: 'pink'}
      ]}/>
    </>
  )
}

export default App