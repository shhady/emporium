'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { Toaster, toast } from 'sonner';

export default function ProductInfo({ product, chosenVariant, setChosenVariant, variants, heightForMobile }) {
  const [localChosenVariant, setLocalChosenVariant] = useState(chosenVariant);
  const [isFav, setIsFav] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [alertSize, setAlertSize] = useState(false);
  const handleFavClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsFav(prev => !prev);
  };

  useEffect(() => {
    setLocalChosenVariant(chosenVariant);
  }, [chosenVariant]);

  const chooseVariant = (id) => {
    const chosenNewVariant = variants.find(variant => variant._id === id);
    setChosenVariant(chosenNewVariant);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const loadingToast = toast.loading('מוסיף לסל');

    if(!selectedSize){
      setAlertSize(true)
         return toast.error('תבחר מידה', {
          id: loadingToast,
        });
    }
    // Logic to save the product, variant, and selected size
    const cartItem = {
      product,
      variant: localChosenVariant,
      size: selectedSize
    };
    toast.success('מוצר זה התווסף לסל מוצרים', {
      id: loadingToast,
    });
    setAlertSize(false)
    console.log('Adding to cart:', cartItem);
    // Add the item to the cart or send it to the backend as needed
  };

  return (
    <div className={`${heightForMobile} col-span-5 px-4 md:px-24 flex flex-col justify-between`}>
      <div dir='ltr' className='flex justify-between items-center'>
        <h1 className='font-medium text-2xl'>{product.brand}</h1>
        <Heart size={16} color="#000000" strokeWidth={1.25} onClick={handleFavClick} className={`cursor-pointer ${isFav ? 'text-red-500' : ''}`} />
      </div>
      <p className='font-normal py-4'>{product.description}</p>
      <p className='font-medium text-[18px] py-2'>₪ {product.price}</p>
      <hr className="w-full border-t border-gray-300" />
      <div className='font-medium text-2xl '>בחר צבע</div>
      <div className='flex justify-start items-center gap-4 py-2'>
        {product.variants.map((variant) => (
          <div
            key={variant._id}
            className={`cursor-pointer ${localChosenVariant?._id === variant._id ? 'font-medium  border border-black  bg-slate-100 px-2 rounded-lg' : 'px-2'}`}
            onClick={() => chooseVariant(variant._id)}
          >
            {variant.color}
          </div>
        ))}
      </div>
      <hr className="w-full border-t border-gray-300" />
      <div>
        <div className='font-medium text-2xl '>בחר מידה</div>
        <div className='flex justify-start items-center gap-2 py-2'>
          {localChosenVariant?.stock?.map((stock) => (
            <div
              key={stock.size}
              className={`px-2 cursor-pointer ${selectedSize === stock.size ? 'bg-slate-100 rounded-lg border border-black flex justify-center items-center' : 'bg-transparent rounded-lg border border-white flex justify-center items-center'}`}
              onClick={() => handleSizeClick(stock.size)}
            >
              {stock.size}
            </div>
          ))}
        </div>
        {alertSize ? <div className='min-h-[2rem] text-red-600'>תבחר מידה</div>: <div className='min-h-[2rem]'></div>}
      </div>
      <div className='w-full flex justify-center items-center mt-2'>
        <Button className='w-full' onClick={handleAddToCart}>הוסף לסל</Button>
      </div>
      <Toaster />
    </div>
  );
}
