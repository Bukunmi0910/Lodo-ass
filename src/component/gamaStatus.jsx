import React from 'react';

const GameStatus = ({ playerScores }) => {
  return (
    <div className="flex justify-between p-4">
      {playerScores.map((player, index) => (
        <div key={index} className="text-lg">
          <span className="font-bold">{player.name}:</span> {player.score}
        </div>
      ))}
    </div>
  );
};

export default GameStatus;
