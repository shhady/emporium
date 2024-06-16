// 'use client'
// import Image from 'next/image'
// import React, {useState, useEffect} from 'react'
// import { Button } from './ui/button'
import ProductCard from './ProductCard';

export default async function NewArrivals() {
  // const [products, setProducts] = useState([]);

 
  // useEffect(() => {
    // Fetch products data from your backend API
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }api/products`, 
        { next: { revalidate: 3600 } });
                if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
        // return data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const data = await fetchProducts();
  // }, []);
  console.log(data);
  return (
    <div className='mt-24 lg:px-16'>
        <h1 className='text-4xl p-2 lg:p-0'>חדש</h1>
       <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-2 py-2'>

          {data.map(product => {
            return <ProductCard key={product._id} product={product}/>
          })}
       
        
    </div> 
    </div>
  )
}
