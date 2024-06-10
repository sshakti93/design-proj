'use client'
import React, { useState } from 'react'
import "./ConnectWallet.css"
import Link from 'next/link'
import BidForm from '../BidForm/BidForm'
export default function ConnectWallet() {

    const [bid,setBid] = useState(false)
    const buttonClick = () => {
        setBid(true)
    }

  return (
    <div>

        <div className='connect-wallet'>
            <div className='connect-img'>
                <img src='/images/connect_fox.svg'/>
            </div>
            <div className='connect-text'>
                <p>Connect your Metamask Wallet<br></br>
                to continue</p>

            </div>
            
            <div className='connect-button' onClick={buttonClick}>
                <button>Connect Wallet</button>

            </div>
            
        </div>

    {bid && (
        <div className="overlay">
            <BidForm/>
        </div>
    )}



    </div>
  )
}
