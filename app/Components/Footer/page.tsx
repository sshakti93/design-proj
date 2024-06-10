import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    
    <div className='footer-items'>
        <div className='top-footer'>
            <div className='logo-links'>
                <div className='site-logo-img'>
                    <img src='/images/site-logo.png'/>
                </div>
                <div className='links'>
                    <img src='/images/facebook.svg'/>
                    <img src='/images/linkedin.svg'/>
                    <img src='/images/youtube.svg'/>
                    <img src='/images/instagram.svg'/>
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
