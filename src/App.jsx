import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/phrase/Phrase'
import ButtonPhrase from './components/buttonPhrase/ButtonPhrase'

function App() {

  const bgArr = [1, 2, 3, 4];

  const [phraseRandom, setPhraseRandom] = useState(getRandomFromArr(phrases));
  const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr));

  console.log(getRandomFromArr(phrases))

  const objStyle = {
    backgroundImage: `url('../fondo${bgApp}.png')`
  }

  return (
    <div style={objStyle} className='app__container'>
      <h1 className='app__title'>Galleta de la <hr /> fortuna</h1>
      <ButtonPhrase
        setPhraseRandom={setPhraseRandom}
        setBgApp = {setBgApp}
        bgArr = {bgArr}
      />
      <Phrase
        phraseRandom={phraseRandom}
      />
    </div>
  )
}

export default App
