import React from 'react'
import './Hero.css'
import Crypto from '../images/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">

            <div className="left">
                <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                <h1>Invest in Cryptocurrency with your BVN</h1>
                <p>Buy, Sell and store lots of Cryptocurrencies</p>
                <div className="input-container">
                    <input 
                        type="email" 
                        placeholder='Enter your email' 
                    />
                    <button className="btn">Learn More</button>
                </div>
            </div>

            <div className="right">
                <div className="img-container">
                    <img src={Crypto} alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero