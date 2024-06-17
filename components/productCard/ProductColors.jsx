'use client';
import React from 'react';

export default function ProductColors({ variants, selectedColor, onColorChange }) {
  const handleColorClick = (event, color) => {
    event.stopPropagation();
    event.preventDefault();
    onColorChange(color);
  };

  return (
    <div className="flex gap-3 mt-4 overflow-hidden">
      {variants.map((variant, index) => (
        <div
          key={index}
          className={`w-4 h-4 shadow-md rounded-full cursor-pointer ${selectedColor === variant.color ? 'border-2 border-blue-500' : 'border-1 border-black'}`}
          style={{ backgroundColor: variant.color }}
          onClick={(event) => handleColorClick(event, variant.color)}
        />
      ))}
    </div>
  );
}
