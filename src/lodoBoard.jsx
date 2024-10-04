import React from 'react';
import PlayerBox from './PlayerBox';

const LudoBoard = () => {
  const players = [
    { name: 'Wazobia', color: 'bg-green-500', tokens: [{ color: 'bg-green-700', number: 1 }, { color: 'bg-green-700', number: 2 }] },
    { name: 'Tony', color: 'bg-yellow-500', tokens: [{ color: 'bg-yellow-700', number: 1 }, { color: 'bg-yellow-700', number: 2 }] },
    { name: 'Tony', color: 'bg-red-500', tokens: [{ color: 'bg-red-700', number: 1 }, { color: 'bg-red-700', number: 2 }] },
    { name: 'Wazobia', color: 'bg-blue-500', tokens: [{ color: 'bg-blue-700', number: 1 }, { color: 'bg-blue-700', number: 2 }] }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {players.map((player, index) => (
        <PlayerBox key={index} name={player.name} color={player.color} tokens={player.tokens} />
      ))}
    </div>
  );
};

export default LudoBoard;
