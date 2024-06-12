'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import Modal from './modal/Modal';

export default function ProductCard({ product, gender }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log('clicked');
    setIsFav(prev => !prev);
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <Link legacyBehavior  href={gender ? `${product.category}/${product._id}` : `${product.gender}/${product.category}/${product._id}`} passHref className="w-full">
      <div className="bg-white md:shadow-md md:ounded-lg overflow-hidden relative mt-2 cursor-pointer" >
        <div className="relative">
          <div
            className={`absolute top-2 right-2 cursor-pointer ${isFav ? 'text-red-500' : 'text-white'}`}
            onClick={handleFavClick}
          >
            {isFav ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="black" stroke="#000000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            ) : (
              <Heart size={16} color="#000000" strokeWidth={1.25} />
            )}
          </div>
          <Image
            src={product.variants[0]?.images[0]}
            alt="Product Image"
            width={200}
            height={200}
            className="w-full h-56"
          />
          <div className="p-4 flex flex-col justify-between h-full overflow-hidden">
            <div className="flex justify-between items-center min-h-[3rem]">
              <h2 className="font-semibold  truncate" dir='ltr'>{product.brand}</h2>
              {!gender && <p className='text-sm'>{product.gender}</p>}
            </div>
            <p className="text-gray-700 mt-2 line-clamp-2 min-h-[3rem]">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
              <h2 className=" font-medium text-[18px]">₪{product.price}</h2>
              <div className=" rounded-full p-[5px] flex justify-center items-center" onClick={handleButtonClick}>
                {/* <ShoppingBag size={16} /> */}
                <Modal product={product}/>
              </div>
            </div>
            <div className="flex gap-3 mt-4 overflow-hidden">
              {product.variants.map((variant, index) => (
                <div key={index} className="w-4 h-4 shadow-md rounded-full" style={{ backgroundColor: variant.color, border: "1px solid grey" }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </Link>
  );
}
