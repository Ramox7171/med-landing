import { useState,useEffect } from 'react'
import { SelectedPage } from './shared/types.helper';

import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import BeforeVisit from './components/BeforeVisit/BeforeVisit';
import GettingHere from './components/GettingHere/GettingHere';
import Contact from './components/Contact/Contac';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home);

    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
      const scrollHandler = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) setIsTopOfPage(false);
      };
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

  return (
    <>
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <BeforeVisit setSelectedPage={setSelectedPage} />
      <Pricing setSelectedPage={setSelectedPage} />
      <GettingHere setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />


    </div>
      
    </>
  )
}

export default App
