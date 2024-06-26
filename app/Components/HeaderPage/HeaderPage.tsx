'use client'

import React, { useState } from 'react'
import "./HeaderPage.css"
import Link from 'next/link'
import Menubar from '@/app/Overlay/Menubar/Menubar'
export const HeaderPage = () => {

  const [burger,setBurger] = useState(false)
  const buttonClick = () => {
    setBurger(!burger)

  }
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
   
   
    
    <div className="header-burger" onClick={buttonClick}>
      {burger ? <img src='/images/close-img.svg'/> : <img src='/images/menu.svg'/>}
    </div>
    </div>

    {burger && (
        <div className="overlay-menubar">
            <Menubar/>
        </div>
    )}

    </div>
  )
}


