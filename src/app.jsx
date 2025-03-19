// React and third-party imports
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Components
import Card from "./components/Card";
import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ParticleBackground from "./components/ParticleBackground";
import ProjectCard from "./components/ProjectCard";
import TypingText from "./components/TypingText";
import ContactButton from "./components/ContactButton";

// Assets
import profile from "./assets/profile.png";
import acebot from "./assets/acebot.png";
import studyai from "./assets/studyai.png";
import anatomics from "./assets/anatomics.png";
import linkedinIcon from "./assets/linkedin.png";
import emailIcon from "./assets/email.png";  

export default function App() {
  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);

  const aboutOpacity = useTransform(scrollYProgress, 
    [0.15, 0.2, 0.35, 0.4],
    [0, 1, 1, 0]  
  );

  const featuredOpacity = useTransform(scrollYProgress, 
    [0.35, 0.4, 0.55, 0.6],
    [0, 1, 1, 0]  
  );

  const portfolioOpacity = useTransform(scrollYProgress, 
    [0.55, 0.6, 0.75, 0.8],
    [0, 1, 1, 0]  
  );

  const contactOpacity = useTransform(scrollYProgress, 
    [0.75, 0.8, 1],
    [0, 1, 1]  
  );
  
  return (
    <div className={`min-h-screen theme-transition bg-primary`}>
      <ParticleBackground />
      <div className="h-20 flex justify-between items-center fixed top-0 w-full bg-transparent">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 h-screen flex items-center justify-center sticky top-0">
        <AnimatePresence>
          <motion.div
            style={{ opacity: heroOpacity }}
            className="flex flex-col items-center space-y-4"
          > 
            <div className="flex flex-col items-center justify-center text-center">
              <TypingText text="Hi, I'm Nelson" />
            </div>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <p className="text-xs !font-bold !text-teal-400 opacity-90 drop-shadow-lg uppercase tracking-wider">
                [Scroll For More]
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16 min-h-screen sticky top-0 flex items-center justify-center">
        <motion.div 
          style={{ opacity: aboutOpacity }}
          className="flex flex-col items-center justify-center space-y-8 w-full"
        >
          <div className="flex flex-row items-center justify-center bg-transparent space-x-4 mb-8">
            <h2 className="!text-white text-3xl font-semibold text-with-shadow">About Me</h2>
            <img src={profile} alt="Nelson Daniels" className="w-12 h-12" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Card
              title="Education"
              paragraph={<Content section="education" />}
            />
            <Card
              title="Technical Skills"
              paragraph={<Content section="skills" />}
            />
            <Card
              title="Experience"
              paragraph={<Content section="experience" />}
            />
          </div>
          
          {/* Call to action */}
          <motion.div 
            className="mt-8 bg-teal-400/20 backdrop-blur-md p-4 rounded-lg border border-teal-400 max-w-lg text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-white text-lg font-medium text-with-shadow">
              Currently available for new opportunities and freelance projects
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Project Section */}
      <section 
        id="featured"
        className="container mx-auto px-4 py-16 sticky top-0 flex items-center justify-center min-h-screen"
      >
        <motion.div 
          style={{ opacity: featuredOpacity }}
          className="flex flex-col items-center space-y-8 w-full max-w-4xl"
        >
          <h2 className="!text-white text-3xl font-semibold text-with-shadow">Featured Work</h2>
          <ProjectCard
            title="Study.ai"
            description="An AI-powered study assistant that helps students learn more effectively by utilizing advanced natural language processing. The application generates practice questions, provides feedback, and adapts to individual learning styles."
            technologies={["Python", "CTkinter", "OpenAI API"]}
            imageUrl={studyai}
            projectUrl="https://github.com/nelsonthelad/study.ai"
            isFeatured={true}
          />
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-16 sticky min-h-screen top-0 flex items-center justify-center">
        <motion.div 
          style={{ opacity: portfolioOpacity }}
          className="flex flex-col items-center space-y-8"
        >
          <h2 className="!text-white text-3xl font-semibold text-with-shadow">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Study.ai"
              description="An AI-powered study assistant that helps students learn more effectively through adaptive learning techniques."
              technologies={["Python", "CTkinter", "OpenAI API"]}
              imageUrl={studyai}
              projectUrl="https://github.com/nelsonthelad/study.ai"
              isFeatured={true}
            />
            <ProjectCard
              title="AceBot"
              description="Chrome Extension for AI-powered quiz solving. Analyzes questions and provides intelligent answers based on course materials."
              technologies={["JavaScript", "HTML", "CSS", "OpenAI API"]}
              imageUrl={acebot}
              projectUrl="https://github.com/nelsonthelad/AceBot"
            />
            <ProjectCard
              title="Anatomics"
              description="3D visualization tool for workout planning with interactive muscle targeting and exercise recommendations."
              technologies={["React", "Node.js", "Three.js", "Tailwind", "Vite", ]}
              imageUrl={anatomics}
              projectUrl="https://github.com/Goshenko/Anatomics"
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 sticky top-0 flex items-center justify-center min-h-screen">
        <motion.div 
          style={{ opacity: contactOpacity }}
          className="flex flex-col items-center space-y-8"
        >
          <h2 className="!text-white text-3xl font-semibold text-with-shadow">Contact</h2>
          <div className="max-w-2xl w-full bg-black/40 backdrop-blur-md rounded-lg p-8 shadow-lg">
            <div className="flex flex-col items-center space-y-6">
              <p className="text-lg text-center !text-white/90">
                Let's connect! I'm always open to discussing new opportunities and interesting projects.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <ContactButton
                  type="email"
                  href="mailto:me@nelsondaniels.ca"
                  text="me@nelsondaniels.ca"
                  icon={emailIcon}
                />
                
                <ContactButton
                  type="linkedin"
                  href="https://linkedin.com/in/nelsondaniels"
                  text="LinkedIn Profile"
                  icon={linkedinIcon}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="flex justify-center items-center">
        <Footer />
      </div>
    </div>
  );
}

