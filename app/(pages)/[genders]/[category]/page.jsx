'use client'
import ProductCard from '@/components/ProductCard';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import BreadCrumbs from './[productId]/BreadCrumbs';

const ProductsByCategoryAndGender = ({ category, gender, params }) => {
  const [products, setProducts] = useState([]);
  console.log(params);
  useEffect(() => {
    const fetchProductsByCategoryAndGender = async () => {
      try {
        const response = await fetch(`/api/products/categoryGender?category=${params.category}&gender=${params.genders}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductsByCategoryAndGender();
  }, [category, gender]);

  return (
    <>
    <BreadCrumbs route={params}/>
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-2 md:p-6'>
      {products.map((product) => (
       <ProductCard product={product} key={product.id} gender={params.genders}/>
      ))}
     
    </div>
    </>
  );
};

export default ProductsByCategoryAndGender;
