import React from 'react';

const Footer = () => {
  return (
    <nav className="fixed bg-transparent bottom-0 left-1/2 transform -translate-x-1/2">
      <div className="mx-4 mb-4 opacity-50 rounded-lg border border-gray-700 p-4 hover:border-gray-500 transition duration-300">
        <div className="container flex justify-center items-center">
          <p className="text-white">© 2025 Nelson Daniels. All rights reserved.</p>
        </div>
      </div>
    </nav>
  );
};

export default Footer;