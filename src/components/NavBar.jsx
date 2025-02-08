import React from 'react';
import { motion, useScroll } from "framer-motion"

const transition = {
  duration: 0.6,
  ease: [0.7, 0.2, 0.2, 1.0],
}

const aboutStart = 0.2;
const aboutEnd = 0.7;
const portfolioStart = 0.7;
const portfolioEnd = 0.8;
const contactStart = 0.8;
const contactEnd = 1.0;

const NavBar = () => {
  const { scrollYProgress } = useScroll();
  const [isScrolledAbout, setIsScrolledAbout] = React.useState(false);
  const [isScrolledPortfolio, setIsScrolledPortfolio] = React.useState(false);
  const [isScrolledContact, setIsScrolledContact] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestValue) => {
      setIsScrolledAbout(latestValue >= aboutStart && latestValue <= aboutEnd);
      setIsScrolledPortfolio(latestValue >= portfolioStart && latestValue <= portfolioEnd);
      setIsScrolledContact(latestValue >= contactStart && latestValue <= contactEnd);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <nav className="fixed top-0">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={transition} 
        className="mx-4 my-4 rounded-lg border border-secondary p-4 hover:border-accent transition duration-300"
      >
        <div className="container mx-auto flex justify-center items-center">
          <div className="space-x-24 px-12">
            <motion.button 
              className={`${
                isScrolledAbout 
                  ? 'bg-accent text-black' 
                  : 'text-white hover:text-accent'
              } px-4 py-2 rounded transition duration-300`}
              animate={{ scale: isScrolledAbout ? 1.1 : 1 }}
            >
              <p>About Me</p>
            </motion.button>
            <motion.button 
              className={`${
                isScrolledPortfolio 
                  ? 'bg-accent text-black' 
                  : 'text-white hover:text-accent'
              } px-4 py-2 rounded transition duration-300`}
              animate={{ scale: isScrolledPortfolio ? 1.1 : 1 }}
            >
              <p>Portfolio</p>
            </motion.button>
            <motion.button 
              className={`${
                isScrolledContact 
                  ? 'bg-accent text-black' 
                  : 'text-white hover:text-accent'
              } px-4 py-2 rounded transition duration-300`}
              animate={{ scale: isScrolledContact ? 1.1 : 1 }}
            >
              <p>Contact</p>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
