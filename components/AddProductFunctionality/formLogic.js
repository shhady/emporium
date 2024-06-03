'use client'
import { useState } from "react";

export function useFormLogic(initialStock = []) {
  const [stock, setStock] = useState(initialStock);

  const toggleSize = (size) => {
    if (stock.some((s) => s.size === size)) {
      setStock(stock.filter((s) => s.size !== size));
    } else {
      setStock([...stock, { size, quantity: 1 }]);
    }
  };

  const updateQuantity = (size, quantity) => {
    setStock(stock.map((s) => (s.size === size ? { ...s, quantity } : s)));
  };

  const handleImageUpload = (form) => (imageUrl) => {
    const updatedImages = [...form.getValues("images"), imageUrl];
    form.setValue("images", updatedImages);
  };
  
  // Bind the form object to handleImageDelete function
  const handleImageDelete = (form) => (updatedImages) => {
    form.setValue("images", updatedImages);
  };
  const resetStock = () => {
    setStock([]);
  };
  return { stock,resetStock, toggleSize, updateQuantity, handleImageUpload, handleImageDelete };
}
