import React from 'react'
import "./Uploading.css"

export default function Uploading() {
  return (
    <div className="fullpage">

        <div className='full'>
            
            <div className="img">
                <img src='/images/uploading.svg'/>
            </div>
            <div className="congrats">
                <p>IMG  0012532 uploading</p>
            </div>
            <div className="uploaded">
                <p>9.0MB Uploaded</p>

            </div>
            <div className="last">
                <div className="pause">
                    <img src='/images/pause.svg'/>
                </div>
                <div className="delete">
                    <img src='/images/trash.svg'/>
                </div>
                
            </div>


        </div>
    </div>
  )
}
