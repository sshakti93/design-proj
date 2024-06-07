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


export default function Home() {
  
return(
  <>
  
  <Header/>

  {/* <Viewauctions/> */}
  {/* <LoadingCollectibles/> */}
  {/* <FullAuctionList/> */}
  
  {/* <SellOnAuction/> */}
  {/* <Circlearchi/> */}
  {/* <Search/> */}

  <Footer/>
  </>
)









}
