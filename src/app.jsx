// React and third-party imports
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

  // Hero section animations
  const heroTextY = useTransform(scrollYProgress, [0, 0.25], ["0%", "0%"]);
  const heroTextOpacity = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);

  // About section animations
  const aboutY = useTransform(scrollYProgress, [0.25, 0.6], ["0%", "0%"]);
  const aboutOpacity = useTransform(scrollYProgress, 
    [0.2, 0.25, 0.45, 0.5],  // Longer display, faster transition
    [0, 1, 1, 0]  
  );

  // Portfolio section animations
  const portfolioY = useTransform(scrollYProgress, [0.6, 0.9], ["0%", "0%"]);
  const portfolioOpacity = useTransform(scrollYProgress, 
    [0.45, 0.5, 0.7, 0.75],  // Longer display, faster transition
    [0, 1, 1, 0]  
  );

  // Contact section animations
  const contactY = useTransform(scrollYProgress, [0.9, 1], ["0%", "0%"]);

  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <div className="h-20 flex justify-center items-center fixed top-0 w-full bg-transparent z-10">
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
          <div className="flex flex-row items-center justify-center bg-transparent space-x-4 mb-8">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <img src={profile} alt="Nelson Daniels" className="w-12 h-12" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-4">
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
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section className="container mx-auto px-4 py-16 sticky min-h-screen top-0 flex items-center justify-center">
        <motion.div 
          style={{ 
            y: portfolioY,
            opacity: portfolioOpacity
          }}
          className="flex flex-col items-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-white">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Study.ai"
              description="An AI-powered study assistant that helps students learn more effectively"
              technologies={["Python", "CTkinter", "OpenAI API"]}
              imageUrl={studyai}
              projectUrl="https://github.com/nelsonthelad/study.ai"
            />
            <ProjectCard
              title="AceBot"
              description="Chrome Extention for AI-powered quiz solving"
              technologies={["JavaScript", "HTML", "CSS", "OpenAI API"]}
              imageUrl={acebot}
              projectUrl="https://github.com/nelsonthelad/AceBot"
            />
            <ProjectCard
              title="Anatomics"
              description="3D visualization tool for workout planning"
              technologies={["React", "Node.js", "Three.js", "Tailwind", "Vite", ]}
              imageUrl={anatomics}
              projectUrl="https://github.com/Goshenko/Anatomics"
            />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 sticky top-0 flex items-center justify-center min-h-screen">
        <motion.div 
          style={{ 
            y: contactY
          }}
          className="flex flex-col items-center space-y-8"
        >
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-lg p-8">
            <div className="flex flex-col items-center space-y-6">
              <p className="text-lg text-center text-white/90">
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

