import Image from "next/image";

import "./page.css"



import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import Circlearchi from "./Components/CircleArchiTexture/Circlearchi";
import Search from "./Components/Searchpage/Search";
import LoadingCollectibles from "./Components/LoadingCollectibles/LoadingCollectibles";
import Viewauctions from "./Components/Viewacutions/Viewauctions";
import Navbar from "./Components/Navbar/Navbar";
import FullAuctionList from "./Components/FullAuctionList/FullAuctionList";
import SellOnAuction from "./Components/SellOnAuction/SellOnAuction";
import Create from "./Components/Create/Create";
import CreatePreview from "./Components/CreatePreview/CreatePreview";
import ConnectWallet from "./Components/SmallPages/ConnectWallet/ConnectWallet";
import Account from "./Components/SmallPages/Account/Account";
import Tos from "./Components/SmallPages/TOS/Tos";
import BidForm from "./Components/SmallPages/BidForm/BidForm";
import SellCard from "./Components/SmallPages/SellCard/SellCard";
import Success from "./Components/SmallPages/Success/Success";
import Uploading from "./Components/SmallPages/Uploading/Uploading";

export default function Home() {
  
return(
  <>
  
  <Header/>

  {/* <Viewauctions/> */}
  {/* <LoadingCollectibles/> */}
  {/* <FullAuctionList/> */}
  
  {/* <SellOnAuction/> */}


  {/* work on... */}
  {/* <Circlearchi/>*/}
  {/* <Create/> */}
  {/* <CreatePreview/> */}
  
  {/* <Search/> */}
  
  

   {/* Smaller pop-ups */}

   {/* work... */}
   {/* <BidForm/> */}
  {/* <SellCard/> */}


  
  
  {/* <ConnectWallet/> */}
  {/* <Account/> */}
  {/* <Tos/> */}
  {/* <Success/> */}
  {/* <Uploading/> */}
  <Footer/>


  </>
)









}
