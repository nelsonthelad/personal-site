import React from 'react';

const Card = ({ title, paragraph }) => {
  return (
    <div className="bg-transparent">
      <div className="mx-4 mb-4 rounded-lg border border-secondary p-4 hover:border-accent transition duration-300">
        <div className="container flex flex-col justify-left">
          {title && <h1 className="text-white text-2xl font-semibold mb-2 mb-6">{title}</h1>}
          <p className="text-white text-lg">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;