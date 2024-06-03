'use client'
import PagesHeros from '@/components/PagesHeros'
import React from 'react'
import { usePathname } from "next/navigation"
import CarouselCategories from '@/components/CarouselCategories'
export default function Men() {
  const pathname  = usePathname()

  return (
    <div className='lg:px-16'>
      <PagesHeros heroImage={pathname.replace('/','')}/>
      <CarouselCategories pathname={pathname}/>
    
    </div>
  )
}
