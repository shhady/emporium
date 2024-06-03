import Link from 'next/link';
import React from 'react'

export default function PagesHeros({heroImage}) {
  console.log(heroImage);
  return (
    <div>
      <Link href={`/${heroImage}/newCollection`}>
          <div className={`w-full h-1/2-screen flex justify-center items-center lg:mt-8`} style={{backgroundImage:`url('/${heroImage}-new-collection.jpg')`, backgroundPosition:'center', backgroundSize:"cover"}}>
        <h2 className='text-4xl lg:text-7xl text-white '>
          NEW COLLECTION
        </h2>
      </div>
      </Link>
      <div className={`w-full h-1/2-screen flex justify-center items-center mt-8`} style={{backgroundImage:`url('/${heroImage}-summer-collection.jpg')`, backgroundPosition:'center', backgroundSize:"cover"}}>
        <h2 className='text-4xl lg:text-7xl text-black text-center'>
          SUMMER 
          COLLECTION
        </h2>
      </div>
    </div>
  )
}
