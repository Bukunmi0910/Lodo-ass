// src/App.jsx
import React from 'react';
import LudoBoard from './component/lodoBox';
import Dice from './component/dice';
import GameStatus from './component/gamaStatus';

const App = () => {
  const playerScores = [
    { name: 'Wazobia', score: 0 },
    { name: 'Tony', score: 0 },
  ];
  
  const currentDiceValue = 4; // This should be dynamic based on game logic

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">Ludo Game</h1>
      <GameStatus playerScores={playerScores} />
      <LudoBoard />
      <Dice value={currentDiceValue} />
    </div>
  );
};

export default App;
