"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import UploadImage from "./UploadImage";
import SizesButtons from './SizesButtons';
import { genders, items, brands } from "../product-form/arrays";

export function CreateProductForm({ product }) {
  const [formData, setFormData] = useState({
    // itemId: '',
    description: '',
    price: '',
    gender: product.gender || '',
    category: product.item || '',
    brand: product.brand || '',
    variants: []
  });
  const [stock, setStock] = useState([]);
  const [currentColor, setCurrentColor] = useState('');
  const [addingVariant, setAddingVariant] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteSize = (size) => {
    // Filter out the selected size from the stock array
    const updatedStock = stock.filter((s) => s.size !== size);
    // Update the stock state with the filtered array
    setStock(updatedStock);
  };

  const addVariant = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      variants: [...prevData.variants, { color, images: [], stock: [] }]
    }));
  };

  const deleteVariant = (color) => {
    setFormData((prevData) => ({
      ...prevData,
      variants: prevData.variants.filter(variant => variant.color !== color)
    }));
  };

  const toggleSize = (color, size) => {
    setFormData((prevData) => ({
      ...prevData,
      variants: prevData.variants.map(variant =>
        variant.color === color
          ? {
            ...variant,
            stock: variant.stock.some((s) => s.size === size)
              ? variant.stock.filter((s) => s.size !== size)
              : [...variant.stock, { size, quantity: 1 }]
          }
          : variant
      )
    }));
  };

  const updateQuantity = (color, size, quantity) => {
    setFormData((prevData) => ({
      ...prevData,
      variants: prevData.variants.map(variant =>
        variant.color === color
          ? {
            ...variant,
            stock: variant.stock.map((s) =>
              s.size === size ? { ...s, quantity } : s
            )
          }
          : variant
      )
    }));
  };

  const handleImageUpload = (color) => (imageUrl) => {
    setFormData((prevData) => ({
      ...prevData,
      variants: prevData.variants.map(variant =>
        variant.color === color
          ? { ...variant, images: [...variant.images, imageUrl] }
          : variant
      )
    }));
  };

  const handleImageDelete = (color) => (updatedImages) => {
    setFormData((prevData) => ({
      ...prevData,
      variants: prevData.variants.map(variant =>
        variant.color === color
          ? { ...variant, images: updatedImages }
          : variant
      )
    }));
  };

  const handleAddVariant = () => {
    if (currentColor) {
      addVariant(currentColor);
      setCurrentColor('');
      setAddingVariant(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/products/createProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Product created successfully:", data);
        // Reset form or provide feedback to the user
      } else {
        console.error("Error creating product:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="bg-muted p-8 rounded">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
        <div className="col-span-full">
          <label className="capitalize">גברים, נשים, ילדים</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            {genders?.map(gender => (
              <option key={gender.name} value={gender.name}>{gender.name}</option>
            ))}
          </select>
        </div>
        <div className="col-span-full">
          <label className="capitalize">סוג</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            {items.map(item => (
              <option key={item.name} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="col-span-full">
          <label className="capitalize">מותג</label>
          <select
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            {brands.map(brand => (
              <option key={brand.name} value={brand.name}>{brand.name}</option>
            ))}
          </select>
        </div>
        <div className="col-span-full">
          <label className="capitalize">תיאור</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="col-span-full">
          <label className="capitalize">מחיר</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {formData.variants.map((variant) => (
  <div key={variant.color} className="border p-4 rounded mt-4 col-span-full">
    <div className="flex justify-between items-center">
      <h3 className="font-bold">{variant.color}</h3>
      <Button onClick={() => deleteVariant(variant.color)} className="bg-red-600">Delete Variant</Button>
    </div>
    <div className="flex flex-col md:flex-row justify-around items-center">
    <UploadImage
      imagesToDelete={variant.images}
      onUpload={handleImageUpload(variant.color)}
      onDelete={handleImageDelete(variant.color)}
    />
    <SizesButtons
      stock={variant.stock}
      onToggleSize={(size) => toggleSize(variant.color, size)}
      onUpdateQuantity={(size, quantity) => updateQuantity(variant.color, size, quantity)}
      onDeleteSize={handleDeleteSize} 
    />
    </div>
   
  </div>
))}
      </div>
      {addingVariant && (
        <div className="col-span-full my-8">
          <label className="">
            פרטים
          <input
            type="text"
            value={currentColor}
            onChange={(e) => setCurrentColor(e.target.value)}
            placeholder="הוסף צבע"
            className="w-full p-2 my-4 border rounded"
          /></label>
          <Button onClick={handleAddVariant} className="w-full my-2" type='button'>המשך</Button>
        </div>
      )}
      {!addingVariant && (
        <Button onClick={() => setAddingVariant(true)} className="col-span-full my-4 w-full" type='button'>הוסף צבע, תמונות ומידות</Button>
      )}
      <div className="w-full flex justify-center items-center mt-8">
      <Button type="submit" className='self-end capitalize'>Submit</Button>
      </div>
    </form>
  );
}
