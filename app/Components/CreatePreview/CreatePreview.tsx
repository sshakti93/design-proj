import React from 'react'
import "./CreatePreview.css"

export default function CreatePreview() {
  return (
    <div className='full'>
        <div className='left-create'>
            <div className='create-collectible'>
                <p>Create single collectible</p>
            </div>

            <div className='upload-box'>
                
                    <img src='/images/uploading_img.svg'/>
                
                    
                

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
                    <img src="/images/preview_rect.svg"  />
                </div>

                <div className='left-bottom-pre'>
                    <div className='preview-name'>
                        <p>Once in a blue neon</p>

                    </div>
                    <div className='preview-desc'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque cursus id vel sed vitae commodo. Suspendisse amet, consequat egestas in cum suspendisse sit. Ultrices venenatis tristique amet fringilla. Nunc, cursus erat etiam nibh lacus velit in. </p>
                    </div>
                    <div className='preview-val'>
                        <p>6.59 ETH</p>
                    </div>
                </div>
            </div>
        </div>



        
    </div>
  )
}
