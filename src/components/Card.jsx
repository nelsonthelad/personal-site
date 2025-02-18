import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, paragraph }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="w-96 h-96"
    >
      <div className="h-full rounded-lg border border-secondary bg-white/10 backdrop-blur-md p-4 hover:border-accent">
        <div className="container flex flex-col">
          {title && (
            <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
          )}
          <p className="text-gray-300">{paragraph}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;