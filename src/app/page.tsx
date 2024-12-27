// import Image from "next/image";
import CataloguePage from "./Homepage/cataloguePage";
import Navbar from "./Homepage/navbar";
import Footer from "./Homepage/footer";
import HeroSection from "./Homepage/hero";
import RecommendationCar from "./Homepage/recommand";
// import CategoryPage from "./catageroyPage/page";
// import CarDetailPage from "./carDeatailpage/page";
// import PaymentPage from "./paymentpage/page";
// import Dashboard  from "./Dashboardpage/page";




export default function Home() {
  return (
   <div> 
    <Navbar/>
   <HeroSection/>
   <CataloguePage/>
   <RecommendationCar />
   <Footer/>
   </div>
  );
}


