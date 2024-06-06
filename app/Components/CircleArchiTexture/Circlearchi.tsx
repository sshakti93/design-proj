import React from 'react'
import "./Circlearchi.css"

export default function Circlearchi() {
  return (
    <>
        {/* PRODUCT IMAGE */}
   
        <div className='image-and-expand'>
            <div className='circlearchi-img'>
                <img src='/images/circlearchitexturemain.svg'/>
            </div>
            <div className='expand-img'>
                <img src='/images/expand.svg'/>
            </div>
        </div>


        {/* PRODUCT NAME AND DESCRIPTIONS */}

        <div className='prod-details'>
            <div className='left-prod-details'>
                <div className='prod-name'>
                    <p>Circle ArchiTexture</p>
                </div>
            
            
            
                <div className='description'>
                    <div className='desc-title'>
                        <p>Description</p>
                    </div>
                    <div className='desc-content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                    venenatis consectetur auctor felis, id fermentum velit tristique
                    turpis. Auctor lectus aliquam mauris elit in mi fringilla ut posuere. 
                    Nunc leo in massa interdum enim. Libero sit donec auctor adipiscing 
                    lacus diam. Duis sed at risus maecenas nulla. A, morbi ut 
                    malesuada lacinia mauris enim. Auctor lectus aliquam mauris elit 
                    duis sed at risus maecenas nulla.
                    </div>
                </div>


                <div className='prod-history'>
                    <div className='history-view'>
                        <p className='history-word'>History</p>
                        <p>View all</p>
                    </div>

                    <div className='last-ownedby'>
                        <div className='left-last-ownedby'>
                            <img src="/images/lastownedby.svg" height={34} width={34}/>
                            <div className="ownedby-section">
                                <p className="ownedby-tag">Owned by</p>
                                <p className="ownedby-sno">Adam Effinome #23AS88</p>
                            </div>
                         </div>

                        <div className='right-last-ownedby'>
                            <div className='price-word-hist'>
                                <p>Price</p>
                            </div>
                            <div className='price-detail-hist'>
                                <p className='nft-currency'>6.99 ETH</p>
                                <p>(= $12,289)</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className='right-prod-details'>
                
                
                <div className='bids'>
                    <div className='current-bid'>
                        <p>Current bid</p>
                    </div>
                    <div className='bid-ending'>
                        <p>Bid ending in</p>
                    </div>
                </div>

                <div className='bid-nft-time'>
                    <div className='bid-nft'>
                        <p>8.38 ETH</p>
                    </div>
                    <div className='bid-time'>
                        <p>8</p>
                        <p>15</p>
                        <p>29</p>
                    </div>
                </div>

                <div className='bid-value-time'>
                    <div className='bid-value'>
                        <p>=$25,775</p>
                    </div>
                    <div className='bid-time-words'>
                        <p>Hours</p>
                        <p>Mins</p>
                        <p>Secs</p>
                    </div>

                    
                </div>

                    
                
            </div>

        </div>

    </>

   
  )
}
