import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    
    <div className='footer-items'>
        <div className='top-footer'>
            <div className='logo-links'>
                <div className='site-logo-img'>
                    <img src='/images/site-logo.png' alt='logo'/>
                </div>
                <div className='links'>
                    <img src='/images/facebook.svg' alt='fb'/>
                    <img src='/images/linkedin.svg' alt='linkedin'/>
                    <img src='/images/youtube.svg' alt='yt'/>
                    <img src='/images/instagram.svg' alt='instagram'/>
                </div>
            </div>
            <div className='termsofservice'>
                <p>Terms of Service</p>
                <p>Privacy</p>
                <p>Resource center</p>
                
            </div>
        </div>

        <div className='bottom-footer'>
            <p>&copy; 2020 MP4toNFT. All rights reserved</p>
            <p>Developed and maintained by ZEVO CORPORATION</p>
        </div>


        
    </div> 
    )
}
