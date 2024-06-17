'use client';
import React from 'react';
import AddToCartModal from './AddToCartModal';

export default function ProductDetails({ brand, description, price, gender, product }) {
  return (
    <div className="flex flex-col justify-between h-full overflow-hidden">
      <div className="flex justify-between items-center min-h-[3rem]">
        <h2 className="font-semibold truncate" dir="ltr">{brand}</h2>
        <p className="text-sm">{gender}</p>
      </div>
      <p className="text-gray-700 mt-2 line-clamp-2 min-h-[3rem]">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <h2 className="font-medium text-[18px]">₪{price}</h2>
        <AddToCartModal product={product}/>
      </div>
    </div>
  );
}
