'use client'
import AddingProductsButtons from '@/components/AddProductFunctionality/AddingProductsButtons'
import { CreateProductForm } from '@/components/AddProductFunctionality/CreateProductForm'
import React,{useState} from 'react'
export default function AddProduct() {
  const [showButtons, setShowButtons] = useState(true)
  const [product, setProduct] = useState({
    gender:'',
    item:'',
    brand:'',
  })
  return (
    <div className="bg-muted p-8 rounded min-h-screen">
       <h2 className="capitalize font-semibold text-4xl mb-6">
        הוסף מוצר
       </h2>
      {showButtons ? (<div>
        <AddingProductsButtons product={product} setProduct={setProduct} setShowButtons={setShowButtons}/>
      </div>):(<CreateProductForm product={product}/>)}
      </div>
  )
}
