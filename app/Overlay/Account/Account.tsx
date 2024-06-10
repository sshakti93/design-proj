import React from 'react'
import "./Account.css"
import Popup from 'reactjs-popup'
export default function Account() {
  return (
    
    <div className="full">
            
            <div className='fullgrid'>


            <div className="user-detail">
                <div className="avatar">
                    <img src='/images/useravatar.svg'/>
                </div>
                <div className="code">
                    <p>0x2345DF2568</p>
                </div>
                <div className="copy-img">
                    <img src='/images/copy.svg'/>
                </div>
            </div>


            <div className="bal-collect">
                <div className="bal-top">
                    <div className="bal-text">
                        <p>Balance</p>
                    </div>
                    <div className="bal-val">
                        <div className="nft-curr">
                            <p>24 ETH</p>
                        </div>
                        <div className='bal-cost'>
                            <p>$23,876</p> 
                        </div>
                    </div>
                </div>

                <div className="bal-bottom">
                    <div className="collectibles">
                        <div className="collect-text">
                            <p>Collectibles</p>
                        </div>
                        <div className="collect-no">
                            <p>0 Collectibles</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="linebtw">
                
            </div>

            <div className="collections">
                <div className="coll-text">
                    <p>Collections</p>
                </div>
                <div className="disconnect">
                    <div className="disc-text">
                        <p>Disconnect</p>
                    </div>
                    <div className="disc-img">
                    <img src='/images/log-out.svg'/>
                    </div>

                </div>
            </div>

        </div>
    
    </div>
  )
}
