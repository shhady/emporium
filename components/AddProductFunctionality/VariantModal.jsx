'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SizesButtons  from './SizesButtons';
import UploadImage from './UploadImage';
const VariantModal = ({ setProduct, onClose }) => {
  const [variant, setVariant] = useState({
    color: '',
    images: [],
    stock: []
  });

  const handleImageUpload = (imageUrl) => {
    setVariant(prevVariant => {
      const newImages = [...prevVariant.images, imageUrl];
      return { ...prevVariant, images: newImages };
    });
  };

  const toggleSize = (size) => {
    const updatedStock = variant.stock.some(item => item.size === size)
      ? variant.stock.filter(item => item.size !== size)
      : [...variant.stock, { size, quantity: 0 }];
    setVariant(prevVariant => ({ ...prevVariant, stock: updatedStock }));
  };

  const updateQuantity = (size, quantity) => {
    const updatedStock = variant.stock.map(item =>
      item.size === size ? { ...item, quantity: parseInt(quantity, 10) || 0 } : item
    );
    setVariant(prevVariant => ({ ...prevVariant, stock: updatedStock }));
  };

  const handleAddMore = () => {
    setProduct(prevProduct => ({
      ...prevProduct,
      variants: [...prevProduct.variants, variant]
    }));
    setVariant({
      color: '',
      images: [],
      stock: []
    });
  };

  const handleSaveAndClose = (e) => {
    e.preventDefault();
    setProduct(prevProduct => ({
      ...prevProduct,
      variants: [...prevProduct.variants, variant]
    }));
    onClose();
  };

  const handleCancel = () => {
    setVariant({
      color: '',
      images: [],
      stock: []
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 text-center">
        <h2 className="text-xl mb-4">Add Variant</h2>
        <form>
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Color
            </label>
            <input onChange={(e) => setVariant({ ...variant, color: e.target.value })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={variant.color} />
          </div>
          <div>
            <UploadImage
              onUpload={handleImageUpload}
              variant={variant}
              imagesToDelete={variant.images}
              onDelete={(index) => {
                setVariant((prevVariant) => {
                  const newImages = prevVariant.images.filter((_, i) => i !== index);
                  return { ...prevVariant, images: newImages };
                });
              }}
            />
          </div>
          <SizesButtons
            stock={variant.stock}
            toggleSize={toggleSize}
            updateQuantity={updateQuantity}
          />
          <div className="mt-4 flex justify-between">
            <Button onClick={handleSaveAndClose} type="button">Save and Close</Button>
            <Button onClick={handleAddMore} type="button">Add More</Button>
            <Button onClick={handleCancel} type="button">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VariantModal;
