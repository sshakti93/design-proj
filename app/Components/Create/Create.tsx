import React from 'react'
import "./Create.css"

export default function Create() {
  return (
    <div className='full'>
        <div className='left-create'>
            <div className='create-collectible'>
                <p>Create Music collectible</p>
            </div>

            <div className='upload-box'>
                <div className='upload-img'>
                    <img src='/images/upload_cloud.svg'/>
                </div>
                <div className='drop-music'>
                    <p>Drop or Upload your music collectable here</p>
                </div>
                <div className='support-format'>
                    <p>Supports MP4, GIF,  JPG, JPEG and PNG format</p>
                </div>
                    
                    
                

            </div>

            <div className='on-sale-box'>
                <div className='onsale-img'>
                    <img src='/images/putonsale.svg'/>
                </div>

            </div>

            <div className='instant-sale-box'>
                <div className='instantsale-img'>
                    <img src='/images/instantsale.svg'/>
                </div>

            </div>

            <div className='sale-value'>
                <div className='salevalue-box'>
                    <img src='/images/salevalue.svg'/>
                </div>

            </div>

            <div className='music-name'>
                <div className='music-box'>
                    <img src='/images/musicname.svg'/>
                </div>

            </div>

            <div className='music-desc'>
                <div className='music-desc-box'>
                    <img src='/images/musicdesc.svg'/>
                </div>

            </div>

            <div className='music-royalties'>
                <div className='royalties-box'>
                    <img src='/images/royalties.svg'/>
                </div>

            </div>

            <div className='wallet-button'>
                <div className='connect-button'>
                    <button>Connect Wallet & Create</button>
                </div>

            </div>
        
        </div>


        {/* RIGHT SECTION */}
        <div className='right-create'>
            <div className='preview-text'>
                <div className='preview'>
                    <p>Preview</p>
                </div>
            </div>

            <div className='preview-banner'>
                <div className='in-preview'>
                    <p>Preview of your new collection</p>
                </div>
            </div>
        </div>



        
    </div>
  )
}
