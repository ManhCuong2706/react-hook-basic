import React, { useState } from 'react';
import './styles.scss';

const colorList = [
  'red',
  'green',
  'blue',
  'magenta',
  'yellow',
  'deeppink',
  'orange',
];

const getNewColor = () => {
  const random = Math.trunc(Math.random() * 6);
  return colorList[random];
};

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem('colorBox') || 'deeppink';
    return initColor;
  });

  const handleColorChange = () => {
    const newColor = getNewColor();
    setColor(newColor);

    localStorage.setItem('colorBox', newColor);
  };
  return (
    <div>
      <h2>Color Box</h2>
      <div
        className='color-box'
        onClick={handleColorChange}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ColorBox;
