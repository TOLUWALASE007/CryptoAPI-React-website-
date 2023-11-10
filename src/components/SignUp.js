import React from 'react'
import './SignUp.css'
import Crypto from '../images/trade.png'

const SignUp = () => {
  return (
    <div className='signup'>
        <div className="container">

            <div className="left">
                <img src={Crypto} alt="" />
            </div>

            <div className="right">
                <h2>Calm down, earn with crypto</h2>
                <p>Get up to 24% monthly benefits on 36+ digital assests</p>
                <div className="input-container">
                    <input type="email" placeholder='Enter your email' />
                    <button className="btn">Learn More</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SignUp