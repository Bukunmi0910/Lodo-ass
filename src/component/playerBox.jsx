// src/components/PlayerBox.jsx
import React from 'react';

const PlayerBox = ({ playerName, boxColor, tokens }) => {
  return (
    <div className={`w-full h-full p-4 ${boxColor} rounded-lg flex flex-col items-center`}>
      {/* Player Name */}
      <div className="text-white font-bold mb-4">{playerName}</div>
      {/* Tokens */}
      <div className="grid grid-cols-2 gap-4">
        {tokens.map((token, index) => (
          <div key={index} className={`w-12 h-12 rounded-full ${token.color} flex items-center justify-center`}>
            <span className="text-white font-bold">{token.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerBox;
