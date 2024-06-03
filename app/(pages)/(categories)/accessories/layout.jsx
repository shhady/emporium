'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Footer from '@/components/Footer'
import SecondNav from '@/components/SecondNav';
import { usePathname } from 'next/navigation'
export default function Layout({children, params}) {
  const pathName = usePathname()
  return (
    <div>
        <div className='flex justify-start items-center px-4 lg:px-8 bg-black text-white sticky top-0 z-50'>
        <Link href="/men">  <h2 className={`${pathName.split('/')[1] === 'men' ? "bg-slate-100 text-black":"none"} py-2 px-4 rounded `}>גברים</h2></Link> 
        <Link href="/women"> <h2 className={`${pathName.split('/')[1] === 'women' ? "bg-slate-100 text-black":"none"} py-2 px-4 rounded `}>נשים</h2></Link> 
        <Link href="/kids">  <h2 className={`${pathName.split('/')[1] === 'kids' ? "bg-slate-100 text-black":"none"} py-2 px-4 rounded`}>ילדים</h2></Link> 
        </div>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}
