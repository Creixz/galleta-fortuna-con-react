import React from 'react'
import getRandomFromArr from '../../services/getRandomFromArr'
import phrases from '../../utils/phrases.json'
import './buttonPhrase.css'

const ButtonPhrase = ({ setPhraseRandom, setBgApp, bgArr }) => {

  const handleChangePhrase = () => {
    setPhraseRandom(getRandomFromArr(phrases))
    setBgApp(getRandomFromArr(bgArr))
  }

  return (
    <button className='button__phrase' onClick={handleChangePhrase } >Probar mi suerte</button>
  )
}

export default ButtonPhrase