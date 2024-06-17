'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import ProductColors from './ProductColors';
import ProductSizes from './ProductSizes';
import ProductActions from './ProductActions';
function generateCategoryLink(gender, category, productId) {
  return `/${gender}/${category}/${productId}`;
}

export default function ProductCard({ product, gender }) {
  const [isFav, setIsFav] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleFavClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsFav(prev => !prev);
  };

  const handleColorChange = (color) => {
    const newVariant = product.variants.find(variant => variant.color === color);
    setSelectedVariant(newVariant);
  };

  return (
    <Link href={generateCategoryLink(product.gender, product.category, product._id)} passHref className="w-full">
      <div className="bg-white md:shadow-md md:rounded-lg overflow-hidden relative  cursor-pointer">
        <ProductImage imageSrc={selectedVariant?.images[0]} alt="Product Image" />
        <div className="p-4 flex flex-col justify-between h-full overflow-hidden">
          <ProductDetails
            brand={product.brand}
            description={product.description}
            price={product.price}
            gender={product.gender}
            product={product}
          />
          <ProductColors
            variants={product.variants}
            selectedColor={selectedVariant.color}
            onColorChange={handleColorChange}
          />
         
      
          <ProductSizes sizes={selectedVariant.stock.map(stock => stock.size)} />
          <ProductActions
            isFav={isFav}
            onFavClick={handleFavClick}
            product={product}
          />
        </div>
      </div>
    </Link>
  );
}
