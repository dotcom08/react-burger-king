import { useEffect } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Offer from "./components/Offer"
import OnStore from "./components/OnStore"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"

import Aos from 'aos';


const App = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className=" overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Services/>
      <Offer/>
      <OnStore/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App