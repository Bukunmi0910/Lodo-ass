// src/components/ColorBox.jsx
import React from 'react';

const ColorBox = ({ boxColor, tokenColors }) => {
  return (
    <div className={`w-40 h-40 ${boxColor} flex flex-wrap justify-center items-center rounded-lg`}>
      {tokenColors.map((color, i) => (
        <div key={i} className={`w-10 h-10 ${color} m-2 rounded-full`}></div>
      ))}
    </div>
  );
};

export default ColorBox;
