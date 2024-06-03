'use client'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import TopOfWeb from './TopOfWeb'

export default function HeroSection() {
  return (
    <div className="bg-[url('/heroPhoto.jpg')] bg-cover h-screen bg-fixed relative">
        <div className='lg:w-1/2  bg-slate-600 gap-6 h-full shadow bg-opacity-50 lg:bg-opacity-50 flex flex-col justify-center items-center'>
        {/* <h1 className='text-4xl hidden lg:flex'>New Arrivals 2024</h1> */}
        <h1 className='text-5xl flex text-center mb-24 text-white'>Emporium Outlet</h1>
        <h1 className='text-4xl text-white flex  text-center mb-12' dir='ltr' >Explore. Discover.</h1>
            <div className='flex justify-center items-center lg:flex-row flex-col gap-5 w-3/4' >
                <Link href='/men'  className='lg:w-1/2 w-full'><Button className=' w-full bg-transparent border-2'>גברים</Button></Link>
                <Link href='/women'  className='lg:w-1/2 w-full'><Button className=' w-full bg-transparent border-2'>נשים</Button></Link>
                <Link href='/kids'  className='lg:w-1/2 w-full'><Button className=' w-full bg-transparent border-2'>ילדים</Button></Link>
            </div>
        </div>
        <div className='absolute bottom-0 w-full'>
          <TopOfWeb />
        </div>
    </div>
  )
}
