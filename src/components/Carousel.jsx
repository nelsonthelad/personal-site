import React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function Carousel({ cards }) {
  const [currentCard, setCurrentCard] = React.useState(0);

  const handleNext = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div className="w-full h-[400px] overflow-hidden">
            {cards[currentCard]}
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="bg-secondary px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors"
        >
          Previous
        </button>
        <div className="flex gap-2">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentCard === index ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-secondary px-4 py-2 rounded-lg hover:bg-opacity-80 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
