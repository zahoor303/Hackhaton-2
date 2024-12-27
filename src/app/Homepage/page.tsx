import Navbar from "./navbar";
import CataloguePage from "./cataloguePage";

import HeroSection from "./hero";
import PickUpSection from "./pickup";
import RecommendationCar from "./recommand";




export default function Home() {
    return (
     <div> 
        <Navbar/>
        <HeroSection/>
        <PickUpSection/>
        <CataloguePage />
        <RecommendationCar />

     
     </div>
    );
  }
  
  
  