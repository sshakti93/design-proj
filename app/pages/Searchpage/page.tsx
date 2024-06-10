import React from 'react'
import "./Search.css"
import Link from 'next/link'
export default function Search() {
  return (
    <div className='full'>

        <div className='loading'>
            <p>Loading based on your search ....</p>
        </div>
        



        <Link href={"/pages/CircleArchiTexture"}>
        <div className="products-section1">
      
      

    


      {/* FIRST PRODUCT SECTION */}
      
      <div className="section1">
        <img src='/images/loading.svg'/>



      </div>

      {/* SECOND PRODUCT SECTION */}
      
      <div className="section1">
        <img src='/images/loading.svg'/>


      </div>


      {/* THIRD PRODUCT SECTION */}
      
      <div className="section1">
        <img src='/images/loading.svg'/>


      </div>

      {/* FOURTH PRODUCT SECTION */}

      <div className="section1">
      <img src='/images/loading.svg'/>
      </div>
    </div>

</Link>


    </div>
  )
}
