import React from 'react'
import "./Header.css"
import Link from 'next/link'
export const Header = () => {
  return (
    <div>


    {/*styles for the header menubar  */}
    <div className="header">
    <div className="header-logo">
      <img src="/images/site-logo.png" alt="site logo" height={90} width={279}/>
    </div>

    <Link href={"/pages/Searchpage"}>
    <div className="header-searchbar">
    <img src="/images/search.svg" alt='search'/>
      <input placeholder="Search Musicians, artists & more...."/>
      

    </div></Link>

    <div className="header-menubar">
      
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        
        <li>
          <Link href={"/pages/Create"}>Create</Link>
        </li>
        
        <li>
          <Link href={"/pages/SellOnAuction"}>Collections</Link>
        </li>
      
    </div>

    <div className="header-controlbar">
      <button>0 Collectibles</button>
      <img src="/images/Ellipse 5.svg" alt='user-icon'/>
    </div>
   
   
   
    <div className="header-burger">
      <img src="/images/menu.svg" alt='menu'/>
    </div>
    </div>



    </div>
  )
}


