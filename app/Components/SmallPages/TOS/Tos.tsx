import React from 'react'
import "./Tos.css"
export default function Tos() {
  return (
    <div className="fullpage">
      <div className='full'>
        <div className="logo-close">
          <div className="logo">
            <img src='/images/site-logo.png'/>
          </div>  
          <div className="closeimg">
            <img src='/images/closeicon.svg'/>
          </div>
        </div>
    
        <div className="tos-words">
          <div className="title">
            <p>Terms of Service</p>
          </div>
          <div className="desc">
            <p>Please take a few minutes to read and understand<br></br> MP4toNFT <a href='#'>Terms of Service</a>. To continue, you will<br></br> need to accept the Terms of Service by checking<br></br> the box.</p>

          </div>
        </div>

        <div className="checks">
          <div className="first">
            <label><input type='checkbox'/>I am at least 13 years old</label>

          </div>
          <div className="second">
          <label><input type='checkbox'/>I accept MP4toNFT Terms of Service</label>
          </div>

        </div>
        <div className="cont-butt">
          <div className="button">
            <button>Continue</button>
          </div>
        </div>
        
        
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    </div>

  )
}
