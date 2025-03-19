import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, paragraph }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="w-full md:w-96 h-auto md:h-96 my-2"
    >
      <div className="h-full rounded-lg border border-secondary bg-black/40 backdrop-blur-md p-6 hover:border-teal-400 transition-all duration-300 shadow-lg">
        <div className="container flex flex-col">
          {title && (
            <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-md">{title}</h3>
          )}
          <div className="text-white/90 font-normal drop-shadow-sm">{paragraph}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;