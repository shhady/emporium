import React from 'react'
import { Button } from '../ui/button'
import { brands, items, genders } from '../product-form/arrays'
export default function AddingProductsButtons({setShowButtons,setProduct,product}) {
  console.log(product);
  return (
    <div>
        
         <h1 className='text-2xl border-b-2'>מגדר</h1>
        <div className='w-full flex gap-5 items-center py-4'>
            {genders.map((gender)=>{
            return <Button
            key={gender.name}
            onClick={() => setProduct(prevProduct => ({ ...prevProduct, gender: gender.name }))}
            style={{ backgroundColor: product.gender === gender.name ? 'gray' : '#000000' }}
          >
            {gender.name}
          </Button>
            })}
        </div>
        <h1 className='text-2xl border-b-2 pt-8'>פריט</h1>
        <div className='w-full flex flex-wrap gap-5 items-center py-4'>
            {items.map((item)=>{
                return <Button
                 key={item.name}
                 onClick={() => setProduct(prevProduct => ({ ...prevProduct, item: item.name }))}
                 style={{ backgroundColor: product.item === item.name ? 'gray' : '#000000' }}
                 >{item.name}</Button>
            })}
        </div>
        <h1 className='text-2xl border-b-2  pt-8'>מותג</h1>
        <div className='w-full flex flex-wrap gap-5 items-center py-4'>
           {brands.map((brand)=>{
            return <Button
             key={brand.name}
             onClick={() => setProduct(prevProduct => ({ ...prevProduct, brand: brand.name }))}
             style={{ backgroundColor: product.brand === brand.name ? 'gray' : '#000000' }}
             >{brand.name}</Button>
           })} 
        </div>
           <div className='py-16'>
             <Button key={items.name} className='w-full' onClick={()=>setShowButtons((prev)=> !prev)}>המשך להוספת פריטים</Button>
           </div>
    </div>
  )
}
