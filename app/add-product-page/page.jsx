'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import VariantModal from '@/components/AddProductFunctionality/VariantModal';
import { Toaster, toast } from 'sonner';
import AddProductForm from '@/components/product-form/AddProductForm';
import Image from 'next/image';
export default function AddingProduct() {
  const [product, setProduct] = useState({
    gender: '',
    category: '',
    brand: '',
    description: '',
    season: '',
    price: '',
    variants: []
  });
  const [openModal, setOpenModal] = useState(false);

  const handleVariantSave = (variant, e) => {
    e.preventDefault();
    setProduct(prevProduct => ({
      ...prevProduct,
      variants: [...prevProduct.variants, variant]
    }));
  };

  const deleteVariant = (color) => {
    const newVariants = product.variants.filter(variant => variant.color !== color);
    setProduct(prevProduct => ({
      ...prevProduct,
      variants: newVariants
    }));
  };

  const handleSaveProduct = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading('Adding product...');
    try {
      const response = await fetch('/api/products/newProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        toast.success('Product added successfully', {
          id: loadingToast,
        });
        // Resetting form and product state
        setProduct({
          gender: product.gender,
          category: product.category,
          brand: product.brand,
          description: '',
          season: '',
          price: 0,
          variants: []
        });
      } else {
        toast.error('Failed to add product', {
          id: loadingToast,
        });
      }
    } catch (error) {
      toast.error('Error adding product', {
        id: loadingToast,
      });
    }
  };

  return (
    <div>
      <h1 className='text-6xl text-center my-8'>Add product</h1>
      <form className="w-full flex justify-center flex-wrap px-3" onSubmit={handleSubmit}>
       <AddProductForm product={product} setProduct={setProduct}/>
        <table className='w-full'>
          {product.variants.map((variant) => (
            <thead key={variant.color}>
              <tr>
                <th scope="row"><Image src={variant.images[0]} alt='image' width={100} height={100} style={{ width: '100px', height: '100px' }} /></th>
                <th scope="row">{variant.color}</th>
                <th scope="row" onClick={() => deleteVariant(variant.color)}>delete</th>
              </tr>
            </thead>
          ))}
        </table>
        <Button type='button' onClick={() => setOpenModal(true)} className="mt-4 w-full">Add Variant</Button>
        {openModal && <VariantModal setProduct={setProduct} onClose={handleSaveProduct} />}
        <Button type="submit" className="mt-16 w-1/3">Submit</Button>
      </form>
      <Toaster />
    </div>
  );
}
