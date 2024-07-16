
'use client'

import { useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import { useEffect, useState } from 'react';
export default function Cart ({params}) {
  const [data, setData] = useState(null);
    const { userId } = useAuth()
    useEffect(()=>{
        const fetchCartData = async ()=>{
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/cart/${userId}`,
            { next: { revalidate: 3600 } });
            if (!response.ok) {
              return <div className='mt-8 flex justify-center items-center'>No products found</div>;;
            }
            const data = await response.json();
            setData(data);
        }
        fetchCartData()
    },[userId])
    
    console.log(data);
//   if (!data) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className='flex flex-col p-4'>
        {data?.cartItems.map((item)=>{
            return <div key={item._id} className='flex justify-between border-b-2 border-grey-500 py-2 px-4' dir='ltr'>
                <div className='flex gap-4'>
                <Image src={item.image} width={100} height={100}/>
                <div className='flex flex-col gap-2'>
                <h1>{item.productId.brand}</h1>
                <h1>{item.productId.description}</h1>
                <h1>color: {item.color}</h1>
                <h1>Size: {item.size}</h1>
                </div>
                </div>
                
                <div className='flex '>
                    <h1 className='border-1 border-grey-500 h-fit w-4 text-center'>-</h1>
                    <h1 className='border-1 border-grey-500 h-fit w-8 text-center'>{item.quantity}</h1>
                    <h1 className='border-1 border-grey-500 h-fit w-4 text-center'>+</h1>
                </div>
            </div>
        })}
    </div>
  );
};

// export default ProductDetails;
