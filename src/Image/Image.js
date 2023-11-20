import React from 'react';
import './Image.css';
import image from './Footer.png'

export default function Image() {
  return(
    <div className="image">
        <img alt="Footer" src={image} />
    </div>
  )
}