import React from 'react'
import './offers.css'

import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h2>Flat Rs.1000/- off</h2>
            <h2>on cart value above Rs.4999</h2>
            <p>ONLY ON THIS CHRISTMAS</p>
            <button>Check out</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers