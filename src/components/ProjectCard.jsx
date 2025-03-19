import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl, isFeatured = false }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative bg-black/40 backdrop-blur-md rounded-lg border border-secondary hover:border-teal-400 p-6 h-full flex flex-col shadow-lg"
    >
      {isFeatured && (
        <div className="absolute top-4 right-4 bg-teal-400 text-black text-xs font-semibold py-1 px-3 rounded-full z-10 shadow-md">
          Featured Project
        </div>
      )}
      
      {imageUrl && (
        <div className="w-full h-56 mb-5 overflow-hidden rounded-lg flex items-center justify-center bg-black/20">
          <motion.img 
            src={imageUrl} 
            alt={title} 
            className="w-40 h-40 object-cover rounded-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-md">{title}</h3>
      
      <p className="!text-white/90 mb-4 flex-grow drop-shadow-sm">{description}</p>
      
      {technologies && (
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-black/60 text-sm rounded-full text-white/90 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {projectUrl && (
        <motion.a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-transparent border border-teal-400 text-teal-400 rounded-lg transition-all duration-300 hover:bg-teal-400  text-center font-medium shadow-md"
          whileHover={{ scale: 1.05 }}
          initial={{ y: 0 }}
          animate={{ y: [0, -3, 0] }}
          transition={{
            y: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
        >
          View Project
        </motion.a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
