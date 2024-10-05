// src/components/LudoBoard.jsx
import React from 'react';
import PlayerBox from './playerBox';

const LudoBoard = () => {
  const players = [
    { name: 'Wazobia', boxColor: 'bg-green-500', tokens: [
        { color: 'bg-green-700', number: 1 },
        { color: 'bg-green-700', number: 2 },
        { color: 'bg-green-700', number: 3 },
        { color: 'bg-green-700', number: 4 }
      ] 
    },
    { name: 'Tony', boxColor: 'bg-yellow-500', tokens: [
        { color: 'bg-yellow-700', number: 1 },
        { color: 'bg-yellow-700', number: 2 },
        { color: 'bg-yellow-700', number: 3 },
        { color: 'bg-yellow-700', number: 4 }
      ] 
    },
    { name: 'Tony', boxColor: 'bg-red-500', tokens: [
        { color: 'bg-red-700', number: 1 },
        { color: 'bg-red-700', number: 2 },
        { color: 'bg-red-700', number: 3 },
        { color: 'bg-red-700', number: 4 }
      ] 
    },
    { name: 'Wazobia', boxColor: 'bg-blue-500', tokens: [
        { color: 'bg-blue-700', number: 1 },
        { color: 'bg-blue-700', number: 2 },
        { color: 'bg-blue-700', number: 3 },
        { color: 'bg-blue-700', number: 4 }
      ] 
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {players.map((player, index) => (
        <PlayerBox
          key={index}
          playerName={player.name}
          boxColor={player.boxColor}
          tokens={player.tokens}
        />
      ))}
    </div>
  );
};

export default LudoBoard;
