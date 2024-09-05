import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquees from './components/Marquees'
import About from './components/About'
import Eyes from './components/Eyes'
import LocomotiveScroll from 'locomotive-scroll';
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
const App = () => {

  const mainRef = useRef();
  const locomotiveScroll = new LocomotiveScroll();
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    }
    const main = mainRef.current;
    main.addEventListener("contextmenu", handleContextMenu);
    return () => {
      main.removeEventListener("contextmenu", handleContextMenu);
    }
  }, [])

  return (
    <>
      <div id="main" ref={mainRef} data-scroll data-scroll-speed={0.2}>
        <Navbar />
        <LandingPage />
        <Marquees />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
      </div>
    </>
  )
}

export default App