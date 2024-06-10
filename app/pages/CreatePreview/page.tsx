// 'use client'

// import React from 'react'
// import "./CreatePreview.css"
// import { useState } from 'react'

// import Success from '@/app/Overlay/Success/Success'

// export default function Page() {

//     const [img,setImg] = useState( "/images/uploading_img.svg")

//     const imgclick = () => {
//         setImg(prevImage =>
//             prevImage   = '/images/uploading_img.svg' ? '/images/altimg.svg' :  '/images/uploading_img.svg'
//         );
//     };



//     const [wallet,setWallet] = useState(false)

//     const buttonClick = () => {
//         setWallet(true)
//     }
//   return (
//     <div>
//     <div className='full'>
//         <div className='left-create'>
//             <div className='create-collectible'>
//                 <p>Create single collectible</p>
//             </div>

//             <div className='upload-box'  onClick={imgclick}>
                
//                     <img  src={img}/>

//             </div>

//             <div className='on-sale-box'>
//                 <div className='onsale-img'>
//                     <img src='/images/putonsale.svg'/>
//                 </div>

//             </div>

//             <div className='instant-sale-box'>
//                 <div className='instantsale-img'>
//                     <img src='/images/instantsale.svg'/>
//                 </div>

//             </div>

//             <div className='sale-value'>
//                 <div className='salevalue-box'>
//                     <img src='/images/salevalue.svg'/>
//                 </div>

//             </div>

//             <div className='music-name'>
//                 <div className='music-box'>
//                     <img src='/images/musicname.svg'/>
//                 </div>

//             </div>

//             <div className='music-desc'>
//                 <div className='music-desc-box'>
//                     <img src='/images/musicdesc.svg'/>
//                 </div>

//             </div>

//             <div className='music-royalties'>
//                 <div className='royalties-box'>
//                     <img src='/images/royalties.svg'/>
//                 </div>

//             </div>

//             <div className='wallet-button' onClick={buttonClick}>
//                 <div className='connect-button'>
//                     <button>Connect Wallet & Create</button>
//                 </div>

//             </div>
        
//         </div>


//         {/* RIGHT SECTION */}
//         <div className='right-create'>
//             <div className='preview-text'>
//                 <div className='preview'>
//                     <p>Preview</p>
//                 </div>
//             </div>

//             <div className='preview-banner'>
//                 <div className='in-preview'>
//                     <img src="/images/preview_rect.svg"  />
//                 </div>

//                 <div className='left-bottom-pre'>
//                     <div className='preview-name'>
//                         <p>Once in a blue neon</p>

//                     </div>
//                     <div className='preview-desc'>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque cursus id vel sed vitae commodo. Suspendisse amet, consequat egestas in cum suspendisse sit. Ultrices venenatis tristique amet fringilla. Nunc, cursus erat etiam nibh lacus velit in. </p>
//                     </div>
//                     <div className='preview-val'>
//                         <p>6.59 ETH</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
    
//     <div>
//     {wallet && (
//         <div className="overlay">
//             <Success/>
//         </div>
//     )}
   
//     </div>
//     </div>
    
    
//   )
// }
'use client';

import React, { useState } from 'react';
import "./CreatePreview.css";
import Success from '@/app/Overlay/Success/Success';

export default function Page() {
    const [img, setImg] = useState("/images/uploading_img.svg");

    const imgClick = () => {
        setImg(prevImage =>
            prevImage === '/images/uploading_img.svg' ? '/images/altimg.svg' :  '/images/uploading_img.svg'
        );
    };

    const [wallet, setWallet] = useState(false);

    const buttonClick = () => {
        setWallet(true);
    };

    return (
        <div>
            <div className='full'>
                <div className='left-create'>
                    <div className='create-collectible'>
                        <p>Create single collectible</p>
                    </div>

                    <div className='upload-box' onClick={imgClick}>
                        <img src={img} alt="Upload" />
                    </div>

                    <div className='on-sale-box'>
                        <div className='onsale-img'>
                            <img src='/images/putonsale.svg' alt="On Sale" />
                        </div>
                    </div>

                    <div className='instant-sale-box'>
                        <div className='instantsale-img'>
                            <img src='/images/instantsale.svg' alt="Instant Sale" />
                        </div>
                    </div>

                    <div className='sale-value'>
                        <div className='salevalue-box'>
                            <img src='/images/salevalue.svg' alt="Sale Value" />
                        </div>
                    </div>

                    <div className='music-name'>
                        <div className='music-box'>
                            <img src='/images/musicname.svg' alt="Music Name" />
                        </div>
                    </div>

                    <div className='music-desc'>
                        <div className='music-desc-box'>
                            <img src='/images/musicdesc.svg' alt="Music Description" />
                        </div>
                    </div>

                    <div className='music-royalties'>
                        <div className='royalties-box'>
                            <img src='/images/royalties.svg' alt="Music Royalties" />
                        </div>
                    </div>

                    <div className='wallet-button' onClick={buttonClick}>
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
                            <img src="/images/preview_rect.svg" alt="Preview Banner" />
                        </div>

                        <div className='left-bottom-pre'>
                            <div className='preview-name'>
                                <p>Once in a blue neon</p>
                            </div>
                            <div className='preview-desc'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque cursus id vel sed vitae commodo. Suspendisse amet, consequat egestas in cum suspendisse sit. Ultrices venenatis tristique amet fringilla. Nunc, cursus erat etiam nibh lacus velit in.</p>
                            </div>
                            <div className='preview-val'>
                                <p>6.59 ETH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div>
                {wallet && (
                    <div className="overlay">
                        <Success />
                    </div>
                )}
            </div>
        </div>
    );
}
