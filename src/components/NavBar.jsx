import React, { useState, useEffect } from 'react';
import { motion, useScroll } from "framer-motion"

const transition = {
  duration: 0.6,
  ease: [0.7, 0.2, 0.2, 1.0],
}

const aboutStart = 0.25;
const aboutEnd = 0.6;
const portfolioStart = 0.6;
const portfolioEnd = 0.9;
const contactStart = 0.9;
const contactEnd = 1.0;

const NavBar = () => {
  const { scrollYProgress } = useScroll();
  const [isScrolledAbout, setIsScrolledAbout] = React.useState(false);
  const [isScrolledPortfolio, setIsScrolledPortfolio] = React.useState(false);
  const [isScrolledContact, setIsScrolledContact] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = sectionTop + scrollTop;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestValue) => {
      setIsScrolledAbout(latestValue >= aboutStart && latestValue <= aboutEnd);
      setIsScrolledPortfolio(latestValue >= portfolioStart && latestValue <= portfolioEnd);
      setIsScrolledContact(latestValue >= contactStart && latestValue <= contactEnd);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={transition} 
        className={`${isScrolled ? 'bg-primary/70' : 'bg-white/10'} backdrop-blur-md mx-auto my-4 rounded-lg border border-secondary hover:border-teal-400 transition duration-300 shadow-lg max-w-3xl`}
      >
        <div className="flex justify-center items-center">
          <div className="flex space-x-8 sm:space-x-12 md:space-x-16 px-6 py-2">
            <motion.button 
              onClick={() => scrollToSection('#about')}
              className={`${
                isScrolledAbout 
                  ? 'bg-teal-400 text-black' 
                  : 'text-white hover:text-teal-400'
              } px-3 py-2 rounded transition duration-300`}
              animate={{ scale: isScrolledAbout ? 1.1 : 1 }}
              whileHover={{ scale: isScrolledAbout ? 1.1 : 1.05 }}
            >
              <p>About Me</p>
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('#portfolio')}
              className={`${
                isScrolledPortfolio 
                  ? 'bg-teal-400 text-black' 
                  : 'text-white hover:text-teal-400'
              } px-3 py-2 rounded transition duration-300`}
              animate={{ scale: isScrolledPortfolio ? 1.1 : 1 }}
              whileHover={{ scale: isScrolledPortfolio ? 1.1 : 1.05 }}
            >
              <p>Portfolio</p>
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('#contact')}
              className={`${
                isScrolledContact 
                  ? 'bg-teal-400 text-black' 
                  : 'text-white hover:text-teal-400'
              } px-3 py-2 rounded transition duration-300`}
              animate={{ scale: isScrolledContact ? 1.1 : 1 }}
              whileHover={{ scale: isScrolledContact ? 1.1 : 1.05 }}
            >
              <p>Contact</p>
            </motion.button>
          </div>
        </div>
      </motion.div>
      
      {!isScrolled && (
        <motion.div 
          className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
