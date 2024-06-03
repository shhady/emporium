import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
export default function Categories() {
  return (
    <div className='mt-8 px-8 lg:px-16'>
       
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 lg:h-1/2-screen h-screen">
  <Link className="... bg-slate-500 bg-[url('/accessories.jpg')] bg-cover  flex justify-end items-end rounded-lg" href='/accessories'>
            <Button className=" w-full text-2xl ">תכשיטים</Button>
        </Link>
        <Link href='/men' className="... bg-green-50 bg-[url('/men.jpg')] bg-cover bg-center flex justify-end items-end rounded-lg">
  
  <Button className="w-full text-2xl ">גברים</Button>
    </Link>
  <Link href='/newArrivals' className="row-span-2 bg-blue-700 bg-[url('/newArrival.jpg')] bg-cover bg-center flex justify-end items-end rounded-lg">
    <Button className=" w-full text-2xl ">חדש</Button>
  </Link>
  <Link href='/sale' className="col-span-1 row-span-1 ... bg-yellow-300 bg-[url('/sale.jpg')] bg-cover bg-center flex justify-end items-end rounded-lg">
    <Button className=" w-full text-2xl">Sale</Button></Link>
  <Link href='/women' className="lg:col-span-2 col-span-1  bg-red-400 bg-[url('/women.jpg')] bg-cover bg-center flex justify-end items-end rounded-lg">
    <Button className=" w-full text-2xl">נשים</Button></Link>
  
  <Link href='/shoes' className="lg:col-span-1 col-span-2 ... bg-black bg-[url('/shoes.jpg')] bg-cover bg-center flex justify-end items-end rounded-lg">
    <Button className=" w-full text-2xl">נעליים</Button>
  </Link>
</div>
</div>
  )
}
