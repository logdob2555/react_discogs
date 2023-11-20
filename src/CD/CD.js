import React from 'react';
import './CD.css';
import cd from './CD.png'

export default function CDImage() {
  return(
    <div className="cd">
        <img alt="CD" src={cd} />
    </div>
  )
}