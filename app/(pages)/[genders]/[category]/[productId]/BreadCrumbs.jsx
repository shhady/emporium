'use client'
import React from 'react'
import { genderTranslations, itemTranslations } from '@/components/product-form/arrays';
import Link from 'next/link';
function generateCategoryLink(genders, category) {
    if(genders && !category){
        return `/${genders}`
    }
     else if(genders && category){
        return `/${genders}/${category}`;
    }
    else {

    }
}
export default function BreadCrumbs({ route, product }) {
    console.log(route);
    const { genders, category } = route;
    console.log(product);
    return (
      <div className="w-fit flex gap-3 rtl md:pr-6 py-1  ">
      <Link href={'/'} passHref>    <span className='hidden md:flex'>דף הבית</span></Link>
        <span className='hidden md:flex'>  &lt;  </span>
        <Link href={generateCategoryLink(genders) } passHref>  <span>{genderTranslations[genders] || genders}</span></Link>
        <span>  &lt;  </span>
        <Link href={generateCategoryLink(genders, category) } passHref> <span>{itemTranslations[category] || category}</span></Link>
        {product && (
          <>
            <span> &lt; </span>
            <span>{product.brand}</span>
          </>
        )}
      </div>
    );
  }