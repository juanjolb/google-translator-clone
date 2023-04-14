import './App.css'
import useTranslator from './hooks/useTranslator'

function App () {
  const {
    state,
    switchLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    translateText
  } = useTranslator()

  return (
    <div className="App">
      <h1>Google Translator Clone</h1>
      <hr />
      <select>
        <option value="es">Spanish</option>
      </select>
      <textarea placeholder='Insert text to translate'></textarea>
      <textarea placeholder='Translation'></textarea>
      <button onClick={() => { setFromLanguage('es') }}>Switch</button>
      {
        JSON.stringify(state)
      }
    </div>
  )
}

export default App
