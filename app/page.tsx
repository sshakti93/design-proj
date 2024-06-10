import Image from "next/image";

import "./page.css"



import { Header } from "./Components/Header/page";
import { Footer } from "./Components/Footer/Footer";
import Circlearchi from "./pages/CircleArchiTexture/page";
import Search from "./pages/Searchpage/page";
import LoadingCollectibles from "./pages/LoadingCollectibles/page";
import Viewauctions from "./pages/Viewacutions/page";

import FullAuctionList from "./pages/FullAuctionList/page";
import SellOnAuction from "./pages/SellOnAuction/page";
import Create from "./pages/Create/page";
import CreatePreview from "./pages/CreatePreview/page";
import ConnectWallet from "./Overlay/ConnectWallet/page";
import Account from "./Overlay/Account/Account";
import Tos from "./Overlay/TOS/Tos";
import BidForm from "./Overlay/BidForm/BidForm";
import SellCard from "./Overlay/SellCard/SellCard";
import Success from "./Overlay/Success/Success";
import Uploading from "./Overlay/Uploading/Uploading";
import Link from "next/link";

export default function Home() {
  
return(
  <>
    

    <div>

        {/* Music section at the top */}

        <div className="music-auctions">
            <div className="musicCollectibles">
            <h2>Music Collectables</h2>
            <p>Find, Buy, Sell & Collect your Favourite Music Collectable</p>
            </div>
            
            
            <div className="view-auctions">
                <p>View all live auctions</p>
            </div>
            </div>
            {/* FIRST ROW OF PRODUCTS */}
        <Link href={"/pages/CircleArchiTexture"}>
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
            <div className="line-btw-users">
                
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
            <img className="prod-images" src="/images/theromanroom.svg" width={260} height={217}/>
            </div>
            
            <div className="prod-end-section">
            <div className="section1-prod-name">
                <p>The Roman Room</p>
            </div>

            <div className="current-bid">
                <p>Current bid</p>
                <p className="prod-cost">ETH 5.89</p>
                <p className="prod-cost">= $11,557</p>
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



        </div>

        {/* SECOND PRODUCT SECTION */}
        
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
            <div className="line-btw-users">
                
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
            <img className="prod-images" src="/images/circlearchitexture.svg" width={260} height={217}/>
            </div>
            <div className="prod-end-section">
            <div className="section1-prod-name">
                <p>Circle ArchiTexture</p>
            </div>

            <div className="current-bid">
                <p>Current bid</p>
                <p className="prod-cost">ETH 5.89</p>
                <p className="prod-cost">= $11,557</p>
            </div>

            <div className="bid-ending">
                <p>Bid ending in</p>
                <p className="prod-time">6h 24m 36s</p>
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


        </div>


        {/* THIRD PRODUCT SECTION */}
        
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
            <div className="line-btw-users">
                
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
            <img className="prod-images" src="/images/manwithlove.svg" width={260} height={217}/>
            </div>
            <div className="prod-end-section">
            <div className="section1-prod-name">
                <p>Man with love</p>
            </div>

            <div className="current-bid">
                <p>Current bid</p>
                <p className="prod-cost">ETH 5.89</p>
                <p className="prod-cost">= $11,557</p>
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


        </div>

        {/* FOURTH PRODUCT SECTION */}

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
            <div className="line-btw-users">
                
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
            <img className="prod-images" src="/images/onceinablueneon.svg" width={260} height={217}/>
            </div>
            <div className="prod-end-section">
            <div className="section1-prod-name">
                <p>Once in a blue neon</p>
            </div>

            <div className="current-bid">
                <p>Current bid</p>
                <p className="prod-cost">ETH 5.89</p>
                <p className="prod-cost">= $11,557</p>
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


        </div>
        
        </div>


        {/* SECOND ROW OF PRODUCTS */}

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
            <div className="line-btw-users">
                
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
            <img className="prod-images" src="/images/analogheartbreak.svg" width={260} height={217}/>
            </div>
            
            <div className="prod-end-section">
            <div className="section1-prod-name">
                <p>Analog HeartBreak</p>
            </div>

            <div className="current-bid">
                <p>Current bid</p>
                <p className="prod-cost">ETH 5.89</p>
                <p className="prod-cost">= $11,557</p>
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



        </div>

        {/* SECOND PRODUCT SECTION */}
        
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
            <div className="line-btw-users">
                
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
            <img className="prod-images" src="/images/blackotaku.svg" width={260} height={217}/>
            </div>
            <div className="prod-end-section">
            <div className="section1-prod-name">
                <p>Black Otaku</p>
            </div>

            <div className="current-bid">
                <p>Price</p>
                <p className="prod-cost">ETH 7.38</p>
                <p className="prod-cost">= $15,889</p>
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


        </div>


        {/* THIRD PRODUCT SECTION */}
        
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
            <div className="line-btw-users">
                
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
            <img className="prod-images" src="/images/mindpleasure.svg" width={260} height={217}/>
            </div>
            <div className="prod-end-section">
            <div className="section1-prod-name">
                <p>Mind Pleasure</p>
            </div>

            <div className="current-bid">
                <p>Current bid</p>
                <p className="prod-cost">ETH 5.89</p>
                <p className="prod-cost">= $11,557</p>
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


        </div>

        {/* FOURTH PRODUCT SECTION 
            ---------------------- */}

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
            <div className="line-btw-users">
                
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
            <img className="prod-images" src="/images/giantrobot.svg" width={260} height={217}/>
            </div>
            <div className="prod-end-section">
            <div className="section1-prod-name">
                <p>GIANT ROBOT</p>
            </div>

            <div className="current-bid">
                <p>Current bid</p>
                <p className="prod-cost">ETH 5.89</p>
                <p className="prod-cost">= $11,557</p>
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


        </div>
        
        </div>
        </Link> 

        
            


            <div className='building-search'>
                <Link href={"/pages/FullAuctionList"}>
                <div className='view-auctions'>

                    <button>View all live auctions</button>

                </div></Link>
                <div className='building-eco'>
                    <p>We are building the new economy for <br></br> collecting music</p>
                </div>
                <div className='search-music'>
                    <p>We’re bringing Music creators, digital creators, crypto<br></br> natives, and collectors together to move culture forward.</p>
                </div>
                
                <Link href={"/pages/Create"}>
                    <div className='sell-button'>
                        <button>Select your Music Collectible</button>
                    </div>
                </Link>
            </div>
        




    </div>
  


  


  </>
)









}
