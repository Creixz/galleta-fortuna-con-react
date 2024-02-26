import React from 'react'
import './phrase.css'

const Phrase = ({ phraseRandom }) => {

    return (
        <p className='phrase__text'>{phraseRandom.phrase}</p>
    )
}

export default Phrase