// src/components/LudoBoard.jsx
import React from 'react';
import ColorBox from './colorBox';

const LudoBoard = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Ludo Board (4 color boxes) */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {/* Green box with green tokens */}
        <ColorBox boxColor="bg-green-500" tokenColors={['bg-green-700', 'bg-green-700', 'bg-green-700', 'bg-green-700']} />

        {/* Yellow box with yellow tokens */}
        <ColorBox boxColor="bg-yellow-500" tokenColors={['bg-yellow-700', 'bg-yellow-700', 'bg-yellow-700', 'bg-yellow-700']} />

        {/* Red box with red tokens */}
        <ColorBox boxColor="bg-red-500" tokenColors={['bg-red-700', 'bg-red-700', 'bg-red-700', 'bg-red-700']} />

        {/* Blue box with blue tokens */}
        <ColorBox boxColor="bg-blue-500" tokenColors={['bg-blue-700', 'bg-blue-700', 'bg-blue-700', 'bg-blue-700']} />
      </div>

      {/* Bottom Section with Three Round Boxes */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="w-20 h-20 bg-green-500 flex items-center justify-center rounded-full">
          <span className="text-white text-2xl font-bold">0</span>
        </div>
        <div className="w-20 h-20 bg-red-500 flex items-center justify-center rounded-full">
          <span className="text-white text-2xl font-bold">0</span>
        </div>
        <div className="w-20 h-20 bg-yellow-500 flex items-center justify-center rounded-full">
          <span className="text-white text-2xl font-bold">0</span>
        </div>
      </div>
    </div>
  );
};

export default LudoBoard;
