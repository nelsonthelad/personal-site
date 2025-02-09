import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import profile from "./assets/profile.png";
import { motion, useScroll, useTransform } from "framer-motion";
import TypingText from "./components/TypingText";
import Content from "./components/Content";
import Carousel from "./components/Carousel";

export default function App() {
  const { scrollYProgress } = useScroll();

  const heroTextY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100%"]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Other sections animate up from bottom
  const aboutY = useTransform(scrollYProgress, [0.0, 0.3], ["100%", "0%"]);

  // Other sections animate up from bottom
  const portfolioY = useTransform(scrollYProgress, [0.5, 0.7], ["50px", "0px"]);
  const contactY = useTransform(scrollYProgress, [0.7, 0.9], ["50px", "0px"]);

  // Add opacity animations for smoother transitions
  const aboutOpacity = useTransform(scrollYProgress, 
    [0.2, 0.4, 0.6, 0.7],  
    [0, 1, 1, 0]  
  );
  const portfolioOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const contactOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  const carouselCards = [
    <Card
      title="Education"
      paragraph={<Content section="education" />}
    />,
    <Card
      title="Technical Skills"
      paragraph={<Content section="skills" />}
    />,
    <Card
      title="Experience"
      paragraph={<Content section="experience" />}
    />
  ];

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
              y: heroTextY,
              opacity: heroTextOpacity
            }}
            className="flex flex-col items-center justify-center text-center"
          > 
            <TypingText text="Hi, I'm Nelson" />
          </motion.div>
          <motion.div
            style={{
              y: heroTextY,
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

      {/* About Section - Sticky header with scrolling cards */}
      <section className="container mx-auto px-4 py-16 min-h-screen sticky top-0 flex items-center justify-center">
        <motion.div 
          style={{ 
            y: aboutY,
            opacity: aboutOpacity
          }}
          className="flex flex-col items-center justify-center space-y-8 w-full"
        >
          <div className="flex flex-row items-center justify-center bg-primary space-x-4 mb-8">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <img src={profile} alt="Nelson Daniels" className="w-12 h-12" />
          </div>
          <div className="items-center justify-center">
            <Carousel cards={carouselCards} />
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
              title="Contact"
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

