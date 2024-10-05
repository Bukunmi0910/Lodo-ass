import React from 'react';

const Dice = ({ value }) => {
  return (
    <div className="flex items-center justify-center w-16 h-16 bg-white border-2 border-gray-300 rounded-lg">
      <span className="text-2xl font-bold">{value}</span>
    </div>
  );
};

export default Dice;
