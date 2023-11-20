import React from 'react';
import './Cassette.css';
import cassette from './Cassette.png'

export default function CassetteImage() {
  return(
    <div className="cassette">
        <img alt="Cassette" src={cassette} />
    </div>
  )
}