import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, technologies, imageUrl, projectUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="bg-white/10 backdrop-blur-md rounded-lg border border-secondary hover:border-accent p-4"
    >
      {imageUrl && (
        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg flex items-center justify-center">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-32 h-32 object-cover rounded-sm"
          />
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      {technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-secondary text-sm rounded-full text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-80 transition-colors"
        >
          View Project
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
