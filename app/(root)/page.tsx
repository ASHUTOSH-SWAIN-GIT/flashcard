import  Header  from "../../components/Header";
import {Navbar} from "../../components/Navbar"
import AboutSection from "@/components/AboutSection";
import DecksSection from "@/components/Decksection";

export default function Home() {
  return (
 <div>
    <Header/>
    <Navbar/>
    <AboutSection/>
    <DecksSection/>
 </div>
  );
}
