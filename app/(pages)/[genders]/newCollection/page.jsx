
'use client'
import ProductCard from '@/components/ProductCard';
import React, { useEffect, useState } from 'react';
import BreadCrumbs from '../[category]/[productId]/BreadCrumbs';
import { productsB } from './Products';
const NewCollection = ({ category, gender, params }) => {
  const [products, setProducts] = useState([]);
  console.log(productsB);

  console.log(params);
 
  useEffect(() => {
    const fetchProductsByGender = async () => {
      try {
        const response = await fetch(`/api/products/gender?gender=${params.genders}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProductsByGender();
  }, [category, gender]);

  return (
    <>
    <div className='flex justify-start items-center'>
    <BreadCrumbs route={params}/> קולקציה חדשה
    </div>
    
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-2 md:p-6'>
      {products.map((product) => (
       <ProductCard product={product} key={product.id}  gender={params.genders}/>
      ))}
    </div>
    </>
  );
};

export default NewCollection;
