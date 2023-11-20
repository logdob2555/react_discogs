import React from 'react';
import './Vinyl.css';
import vinyl from './Vinyl.png'

export default function Vinyl() {
  return(
    <div className="vinyl">
        <img alt="Vinyl" src={vinyl} />
    </div>
  )
}