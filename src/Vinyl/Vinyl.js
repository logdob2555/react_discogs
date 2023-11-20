import React from 'react';
import './Vinyl.css';
import vinyl from './Vinyl.png'

export default function VinylImage() {
  return(
    <div className="vinyl">
        <img alt="Vinyl" src={vinyl} />
    </div>
  )
}