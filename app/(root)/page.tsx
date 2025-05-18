import  Header  from "../../components/Header";
import {Navbar} from "../../components/Navbar"
import AboutSection from "@/components/AboutSection";
import DecksSection from "@/components/Decksection";
import CardCarousel from "@/components/CardCarousel";
import Footer from "@/components/Footer";
export default function Home() {
  return (
 <div>
    <Header/>
    <Navbar/>
    <AboutSection/>
    <DecksSection/>
    <CardCarousel/>
    <Footer/>
 </div>
  );
}
