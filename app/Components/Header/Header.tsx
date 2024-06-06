import React from 'react'
import "./Header.css"
export const Header = () => {
  return (
    <div>


    {/*styles for the header menubar  */}
    <div className="header">
    <div className="header-logo">
      <img src="/images/site-logo.png" alt="site logo" height={90} width={279}/>
    </div>

    <div className="header-searchbar">
    <img src="/images/search.svg"/>
      <input placeholder="Search Musicians, artists & more...."/>
      

    </div>

    <div className="header-menubar">
      
        <li>
          <a>Home</a>
        </li>
        
        <li><a>Create</a>
        </li>
        
        <li><a>Collections</a>
        </li>
      
    </div>

    <div className="header-controlbar">
      <button>0 Collectibles</button>
      <img src="/images/Ellipse 5.svg"/>
    </div>
   
   
   
    <div className="header-burger">
      <img src="/images/menu.svg"/>
    </div>
    </div>



    </div>
  )
}


