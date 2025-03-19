import React from 'react';

const ContactButton = ({ type, href, text, icon }) => {
  return (
    <a 
      href={href}
      target={type === 'linkedin' ? '_blank' : undefined}
      rel={type === 'linkedin' ? 'noopener noreferrer' : undefined}
      className="flex items-center space-x-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300 w-full sm:w-auto text-white/90 drop-shadow-md"
    >
      <img src={icon} alt={`${type} icon`} className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );
};

export default ContactButton;
