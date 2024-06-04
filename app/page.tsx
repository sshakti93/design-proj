import Image from "next/image";

import "./page.css"

export default function Home() {
  
return(
  // Styles for the whole page
  <div className="full-page">

    {/*styles for the header menubar  */}
    <div className="header">
    <div className="header-logo">
      <Image src={"/images/site-logo.png"} alt="site logo" height={90} width={279}/>
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
      <button>Collectibles</button>
      <img src="/images/Ellipse 5.svg"/>
    </div>
   
   
   
    <div className="header-burger">
      <img src="/images/menu.svg"/>
    </div>
    </div>

  {/*styles for the remaining section of the page */}

    
    <div className="music-auctions">
      <div className="musicCollectibles">
       <h2>Music Collectables</h2>
       <p>Find, Buy, Sell & Collect your Favourite Music Collectable</p>
      </div>
    
    
      <div className="view-auctions">
        <p>View all live auctions</p>
     </div>
    </div>



    {/* Styles for PRODUCT DETAILS */}
    <div className="products-section1">
      
      
      {/* FIRST PRODUCT SECTION */}
      
      <div className="section1">
        <div className="created-owned">
          <div className="created-section">
            <div className="created-user">
              <img src="/images/created_pfp.svg" height={34} width={34}/>
              <div className="user-code">
                <p className="created-owned-tags">Created by</p>
                <p className="created-owned-snos">#114TK6</p>
              </div>
            </div>
          </div>
          <div className="owned-section">
            <div className="owned-user">
              <img src="/images/owned_pfp.svg" height={34} width={34}/>
              <div className="owned-code">
                <p className="created-owned-tags">Owned by</p>
                <p className="created-owned-snos">#223BV1</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section1-prod-image">
          <img className="prod-images" src="/images/prod1_img.svg" width={260} height={217}/>
        </div>
        <div className="section1-prod-name">
          <p>The Roman Room</p>
        </div>

        <div className="current-bid">
          <p>Current bid</p>
          <p className="prod-cost">ETH 5.89</p>
          <p>= $11,557</p>
        </div>

        <div className="bid-ending">
          <p>Bid ending in</p>
          <p className="prod-time">12h 24m 36s</p>
        </div>

        <div className="section-end">
          <div className="section-history">
            <img src="/images/history_arrows.svg"/>
            <p>View History</p>
          </div>

          <div className="placebid">
            <button>Place Bid</button>
          </div>
        </div>



      </div>



      <div className="section2">
        <p>THIS IS THE SECOND SECTION</p>
      </div>



      <div className="section3">
        <p>THIS IS THE THIRD SECTION</p>
      </div>



      <div className="section4">
        <p>THIS IS THE FOURTH SECTION</p>
      </div>

    </div>
  
  
  
  
  </div>
)








}
