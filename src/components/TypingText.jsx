import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const TypingText = ({ text }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text.slice(0, latest)
  );
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Initial theme check
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

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
      <motion.span className={`text-7xl font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'} font-primary text-with-shadow`}>{displayText}</motion.span>
      <CursorBlinker />
    </div>
  );
};

const CursorBlinker = () => {
  return (
    <motion.span
      className="text-7xl text-teal-400 font-primary"
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
