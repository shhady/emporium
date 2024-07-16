'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Heart } from 'lucide-react';
import { Toaster, toast } from 'sonner';
import {SwiperDesktop,SwiperMobile} from '@/components/productSwiper/Swiper';
import { useAuth } from '@clerk/nextjs';
export default function ProductInfo({ product , productId,onPress}) {
  // const [localChosenVariant, setLocalChosenVariant] = useState(chosenVariant);
  const [isFav, setIsFav] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [alertSize, setAlertSize] = useState(false);
  const [variants, setVariants] = useState(product.variants);
  const {userId} = useAuth()
  const [chosenVariant, setChosenVariant] = useState(product.variants[0])
  const handleFavClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsFav(prev => !prev);
  };

  console.log(chosenVariant);

  const chooseVariant = (id) => {
    const chosenNewVariant = variants.find(variant => variant._id === id);
    setChosenVariant(chosenNewVariant);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = async () => {
    const loadingToast = toast.loading('מוסיף לסל');

    if (!selectedSize) {
      setAlertSize(true);
      return toast.error('תבחר מידה', {
        id: loadingToast,
      });
    }

    const cartItem = {
      productId: product._id,
      variantId: chosenVariant._id,
      size: selectedSize,
      color: chosenVariant.color,
      image:chosenVariant.images[0]
    };

    try {
      const response = await fetch(`/api/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...cartItem, clerkId: userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      const result = await response.json();
      toast.success('מוצר זה התווסף לסל מוצרים', {
        id: loadingToast,
      });

      setAlertSize(false);
      console.log('Added to cart:', result);
    } catch (error) {
      toast.error('Error adding to cart', {
        id: loadingToast,
      });
      console.error('Error:', error);
    }
  };
  return (
    <div className='grid grid-cols-1 md:grid md:grid-cols-10'>
       <div className='md:hidden'>
          <SwiperMobile images={chosenVariant.images} productId={productId}/>
    </div>
    <div className={`${productId ? 'h-1/2-screen':""} col-span-5 px-4 ${!productId ? 'md:px-4': "md:px-24"} flex flex-col justify-between`}>
      <div dir='ltr' className='flex justify-between items-center mt-2'>
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
            className={`cursor-pointer ${chosenVariant?._id === variant._id ? 'font-medium  border border-black  bg-slate-100 px-2 rounded-lg' : 'px-2'}`}
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
          {chosenVariant?.stock?.map((stock) => (
            <div
              key={stock.size}
              className={`px-2 cursor-pointer ${selectedSize === stock.size ? 'bg-slate-100 rounded-lg border border-black flex justify-center items-center' : 'bg-transparent rounded-lg border border-white flex justify-center items-center'}`}
              onClick={() => handleSizeClick(stock.size)}
            >
              {stock.size}
            </div>
          ))}
        </div>
        {alertSize ? (
  <div style={{ height: '48px', color: 'red', margin: 0, padding: 0 }}>תבחר מידה</div>
) : (
  <div style={{ height: '48px', margin: 0, padding: 0 }}></div>
)}    </div>
      <div className='w-full flex justify-center items-center mt-2 gap-1'>
        <Button  className='w-3/4' onClick={handleAddToCart}>הוסף לסל</Button>
       {!productId &&  <Button onClick={onPress}  className='w-1/4 bg-white text-red-500' >ביטול</Button>}
      </div>
      <div className='fixed'>
      <Toaster />
      </div>
      
    </div>
    <div className='hidden md:block md:col-span-5'>
          <SwiperDesktop images={chosenVariant.images}/>
          </div>
    </div>
  );
}
