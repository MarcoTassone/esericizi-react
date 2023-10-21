import { useState } from "react"
import { Clock } from "./components/Clock"
import { LanguageContext } from "./components/LanguageContext"

function App() {

  const [language, setLanguage] = useState('en')

  function handleSetLanguage(language){
    setLanguage(language)
  }

  return (
    <>
      <LanguageContext.Provider value={language}>
        <select onChange={handleSetLanguage}>
          <option value='en'>EN</option>
          <option value='it'>IT</option>
        </select>
        <Clock/>
      </LanguageContext.Provider>
    </>
  )
}

export default App