import Image from "next/image";

import "./page.css"



import { Header } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Footer } from "./Components/Footer/Footer";
import Circlearchi from "./Components/CircleArchiTexture/Circlearchi";
import Search from "./Components/Searchpage/Search";
import LoadingCollectibles from "./Components/LoadingCollectibles/LoadingCollectibles";
import Viewauctions from "./Components/Viewacutions/Viewauctions";


export default function Home() {
  
return(
  <>
  <Header/>
  {/* <Viewauctions/> */}
  {/* <Search/> */}
  {/* <LoadingCollectibles/> */}
  <Hero/>
  {/* <Circlearchi/> */}

  <Footer/>
  </>
)









}
