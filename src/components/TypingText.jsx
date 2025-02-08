import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const TypingText = ({ text }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: 'tween',
      duration: text.length * 0.1,
      ease: 'easeInOut',
    });
    return controls.stop;
  }, [text, count]);

  return (
    <div>
      <motion.span className="text-6xl font-bold text-text font-primary">{displayText}</motion.span>
      <CursorBlinker />
    </div>
  );
};

const CursorBlinker = () => {
  return (
    <motion.span
      className="text-6xl text-black font-primary"
      initial={{ opacity: 1 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity }}
      style={{ display: 'inline-block' }}
    >
      |
    </motion.span>
  );
};

export default TypingText;
