'use client'
import React, { useState } from 'react'
import "./BidForm.css"
import Tos from '../TOS/Tos'

export default function BidForm() {

    const [tos,setTos] = useState(false)
    const buttonClick = () => {
        setTos(true)
    }

  return (
   <div className="fullpage">
   
   
   <div className='full'>
        

        {/* first row */}
        <div className="first-row">
            <div className="img">   
                <img src='/images/placebid.svg'/>
            </div>


            <div className="prod-end-section">
                <div className="section1-prod-name">
                    <p>Man with love</p>
                </div>

                <div className="current-bid">
                    <p>Current bid</p>
                    <p className="prod-cost">ETH 5.89</p>
                    <p className="prod-val">= $11,557</p>
                </div>

                <div className="bid-ending">
                    <p>Bid ending in</p>
                    <p className="prod-time">12h 24m 36s</p>
                </div>
                <div className="arti">
                    <a href='#'>View Artifact</a>
                </div>
            </div>


            <div className="close-img">
                <img src='/images/closeicon.svg'/>
            </div>
        </div>

        {/* second row */}
        <div className="second-row">
            <div className="enter-details">
                <p>Enter your bid details</p>
            </div>
            <div className="wallet">
                <div className="top-wallet">
                    <p>Wallet address</p>
                    <p>Time stamp</p>
                </div>
                <div className="bottom-wallet">
                    <p>0x..1234BGHC@45</p>
                    <p>Mar 29 2021, 15:15 PM</p>
                </div>
            </div>


            <div className="bid-amount">
                <div className="bid-text">
                    <p>Bid amount</p>
                </div>
                <div className="bid-img">
                    <img src='/images/bidimg.svg'/>
                </div>
                <div className="service-fee">
                    <p>Service fee 2.5% You will receive 8.6 ETH =$14,263</p>
                </div>

            </div>

        </div>

        {/* third row */}
        <div className="third-row">
            <div className="place-button" onClick={buttonClick}>
                <button>Place Bid</button>
            </div>
        </div>


    </div>
    {tos && (
        <div className="overlay">
            <Tos/>
        </div>
    )}
    </div>
  )
}
