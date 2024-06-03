'use client'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { Button } from './ui/button'
import ProductCard from './ProductCard';

export default function NewArrivals() {
  const [products, setProducts] = useState([]);

 
  useEffect(() => {
    // Fetch products data from your backend API
    const fetchProducts = async () => {
      try {
        const response = await fetch('api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className='mt-24 lg:px-16'>
        <h1 className='text-4xl p-2 lg:p-0'>חדש</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-2 py-2'>

          {products.map(product => {
            return <ProductCard key={product._id} product={product}/>
          })}
       
        
    </div>
    </div>
  )
}
