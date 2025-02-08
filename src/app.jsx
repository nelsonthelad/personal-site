import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import profile from "./assets/profile.png";
import { motion, useScroll, useTransform } from "framer-motion";
import TypingText from "./components/TypingText";

export default function App() {
  const { scrollYProgress } = useScroll();

  // Hero text only moves left
  const heroTextX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  
  // Other sections animate up from bottom
  const aboutY = useTransform(scrollYProgress, [0.2, 0.4], ["50px", "0px"]);
  const portfolioY = useTransform(scrollYProgress, [0.5, 0.7], ["50px", "0px"]);
  const contactY = useTransform(scrollYProgress, [0.7, 0.9], ["50px", "0px"]);

  // Add opacity animations for smoother transitions
  const aboutOpacity = useTransform(scrollYProgress, 
    [0.2, 0.4, 0.6, 0.7],  
    [0, 1, 1, 0]  
  );
  const portfolioOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const contactOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <div className="min-h-screen bg-primary">
      <div className="h-20 flex justify-center items-center fixed top-0 w-full bg-primary z-10">
        <NavBar />
      </div>

      {/* Hero Section - Fixed position */}
      <section className="container mx-auto px-4 py-16 h-screen flex items-center justify-center sticky top-0">
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            style={{ 
              x: heroTextX,
              opacity: useTransform(scrollYProgress, [0.6, 0.7], [1, 0])
            }}
            className="flex flex-col items-center justify-center text-center"
          > 
            <TypingText text="Hi, I'm Nelson" />
          </motion.div>
          <motion.div
            style={{
              x: heroTextX,
              opacity: useTransform(scrollYProgress, [0.1, 0.2], [1, 0])
            }}
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <p className="text-xs font-bold opacity-75">[Scroll For More]</p>
          </motion.div>
        </div>
      </section>

      {/* About Section - Animate from bottom */}
      <section className="container mx-auto px-4 py-16 flex justify-end">
        <motion.div 
          style={{ 
            y: aboutY,
            opacity: aboutOpacity
          }}
          className="w-1/2 flex flex-col items-center space-y-8"
        >
          <div className="flex flex-row items-center space-x-4">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <img src={profile} alt="Nelson Daniels" className="w-12 h-12" />
          </div>
          <div className="grid grid-cols-1 gap-8 w-full">
            <Card
              title="Education"
              paragraph="I'm Nelson Daniels, a Computer Science student at Carleton University specializing in Artificial Intelligence and Machine Learning. With a CGPA of 10.66, I have a strong foundation in programming, software development, and problem-solving. I enjoy working with microcontrollers, building interactive hardware projects, and developing AI-driven applications."
            />
            <Card
              title="Technical Skills"
              paragraph="My technical skills span multiple programming languages, including Python, Java, C, and JavaScript, as well as frameworks and tools such as React, Tailwind, Three.js, and OpenStack. I also have hands-on experience with embedded systems, having designed and built projects like a 6-key macro keypad using a Raspberry Pi Pico and CircuitPython."
            />
            <Card
              title="Experience"
              paragraph="Beyond academics, I work as a bike mechanic, where I hone my troubleshooting and repair skills, and I previously led a robotics team to multiple championship wins. I thrive in collaborative environments and enjoy solving complex problems, whether through coding, designing interactive web applications, or working on hardware innovations."
            />
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section - Animate from bottom */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          style={{ y: portfolioY, opacity: portfolioOpacity }}
          className="flex flex-col items-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-white">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Project 1"
              paragraph="Description of your first project"
            />
            <Card
              title="Project 2"
              paragraph="Description of your second project"
            />
            <Card
              title="Project 3"
              paragraph="Description of your third project"
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section - Animate from bottom */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          style={{ y: contactY, opacity: contactOpacity }}
          className="flex flex-col items-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <div className="max-w-2xl w-full">
            <Card
              title="Get in Touch"
              paragraph="Feel free to reach out to me for any inquiries or opportunities."
            />
          </div>
        </motion.div>
      </section>

      <div className="flex justify-center items-center">
        <Footer />
      </div>
    </div>
  );
}

