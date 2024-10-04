import React from 'react';

const PlayerBox = ({ name, color, tokens }) => {
  return (
    <div className={`w-36 h-36 border-2 rounded-lg p-2 flex flex-col justify-between items-center ${color}`}>
      <h3 className="text-white font-bold">{name}</h3>
      <div className="flex justify-around w-full">
        {tokens.map((token, index) => (
          <div key={index} className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${token.color}`}>
            {token.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerBox;
