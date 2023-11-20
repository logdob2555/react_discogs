import React from 'react';
import './Cassette.css';
import cassette from './Cassette.png'

export default function Cassette() {
  return(
    <div className="cassette">
        <img alt="Cassette" src={cassette} />
    </div>
  )
}