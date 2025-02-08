import React from 'react';

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-transparent top-0">
      <div className="mx-4 my-4 opacity-50 rounded-lg border border-gray-700 p-4 hover:border-gray-500 transition duration-300">
        <div className="container mx-auto flex justify-center items-center">
          <div className="space-x-24 opacity-75">
            <button className="text-white hover:text-gray-300 hover:scale-110 transition duration-300">
              About Me
            </button>
            <button className="text-white hover:text-gray-300 hover:scale-110 transition duration-300">
              Portfolio
            </button>
            <button className="text-white hover:text-gray-300 hover:scale-110 transition duration-300">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
