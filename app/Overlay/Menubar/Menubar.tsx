'use client'

import Image from 'next/image'
import React from 'react'
import "./Menubar.css"
import Link from 'next/link'
export default function Menubar() {


  return (
    <div className='fullmenu'>
        
        <div className="logo-close">
            <div className="logoo">
                <Image src={"/images/sitelogomob.svg"} alt='logo' width={172} height={66}/>
            </div>
            
            <div className="closee">
                <Image src={"/images/close-img.svg"} alt='close' width={40} height={40}/>
            </div>
        </div>
        <div className="searchbar">
            <img src="/images/search.svg" alt='search'/>
            <input placeholder='Find Musicians, artists & more....'></input>
        </div>
        <div className="options">
            
            <Link href={"/"}>
            <div className="home">
                <p>Home</p>
            </div></Link>

            <Link href={"/pages/Create"}>
            <div className="create">
                <p>Create</p>
            </div></Link>

            <Link href={"/pages/SellOnAuction"}>
            <div className="collection">
                <p>Music Collection</p>          
            </div>  </Link>
        </div>
        <div className="button-menu">
            <button>Connect Wallet</button>
        </div>
    </div>

    
  )
}
