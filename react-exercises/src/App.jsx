import { useState } from "react"
import { Clock } from './components/Clock'
import { LanguageContext } from "./components/LanguageContext"

function App() {

  const [language, setLanguage] = useState('en')

  function handleSetLanguage(language){
    setLanguage(language)
  }

  return (
    <>
      <LanguageContext value={language}>
        <select onChange={handleSetLanguage}>
          <option value='en'>EN</option>
          <option value='it'>IT</option>
        </select>
        <Clock/>
      </LanguageContext>

      {/* togliendo il context provider in console esce un errore che dice che il context consumer si aspetta un singolo child che è una funzione e non dei children */}
    </>
  )
}

export default App