'use client';
import React from 'react';

export default function ProductSizes({ sizes }) {
  return (
    <div className="flex gap-2 absolute top-1 left-1">
      
      <div className="flex flex-col gap-1">
        {sizes.map((size, index) => (
          <span key={index} className="px-1 py-1 border rounded text-sm">{size}</span>
        ))}
      </div>
    </div>
  );
}
