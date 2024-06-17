'use client';
import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

export default function ProductActions({ isFav, onFavClick, product }) {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className={`cursor-pointer ${isFav ? 'text-red-500' : 'text-gray-500'} absolute top-1 right-1`} onClick={onFavClick}>
        <Heart size={16} />
      </div>
      
    </div>
  );
}
