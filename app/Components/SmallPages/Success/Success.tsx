import React from 'react'
import "./Success.css"
export default function Success() {
  return (
    
    <div className="fullpage">

        <div className='full'>
            
            <div className="img">
                <img src='/images/congrats.svg'/>
            </div>
            <div className="congrats">
                <p>Congratulations</p>
            </div>
            <div className="uploaded">
                <p>Your craft has been uploaded and can be found<br></br> under Music Collection in your profile.</p>

            </div>
            <div className="done-button">
                <button>Done for now</button>
            </div>


        </div>
    </div>
  )
}
