import React from 'react';
import { motion, useScroll } from "framer-motion"

const transition = {
  duration: 0.6,
  ease: [0.7, 0.2, 0.2, 1.0],
}

const NavBar = () => {
  const { scrollYProgress } = useScroll();
  
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
            <button className="text-white hover:text-accent transition duration-300">
              <p>About Me</p>
            </button>
            <button className="text-white hover:text-accent transition duration-300">
              <p>Portfolio</p>
            </button>
            <button className="text-white hover:text-accent transition duration-300">
              <p>Contact</p>
            </button>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
};

export default NavBar;
