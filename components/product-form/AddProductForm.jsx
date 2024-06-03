import React from 'react'
import { items, brands, genders } from './arrays';

export default function AddProductForm({product, setProduct}) {
  return (
    <>
    <div className="w-full md:w-1/3 p-2 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-gender">
      Gender
    </label>
    <div className="relative">
      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-gender" value={product.gender} onChange={(e) => setProduct({ ...product, gender: e.target.value })}>
        <option value="">Select Gender</option>
        {genders.map((gender) => (
          <option key={gender.name} value={gender.name}>{gender.name}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/3 p-2 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-category">
      Category
    </label>
    <div className="relative">
      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category" value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })}>
        <option value="">Select Category</option>
        {items.map((item) => (
          <option key={item.name} value={item.name}>{item.name}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/3 p-2 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-brand">
      Brand
    </label>
    <div className="relative">
      <select className="block appearance-none w-full bg-gray-200 mb-3 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-brand" value={product.brand} onChange={(e) => setProduct({ ...product, brand: e.target.value })}>
        <option value="">Select Brand</option>
        {brands.map((brand) => (
          <option key={brand.name} value={brand.name}>{brand.name}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/3 p-2 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
      Description
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-description" type="text" value={product.description} onChange={(e) => setProduct({ ...product, description: e.target.value })} />
  </div>
  <div className="w-full md:w-1/3 p-2 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-season">
      Season
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-season" type="text" value={product.season} onChange={(e) => setProduct({ ...product, season: e.target.value })} />
  </div>
  <div className="w-full md:w-1/3 p-2 ">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-price">
      Price
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-price" type="number" value={product.price} onChange={(e) => setProduct({ ...product, price: parseFloat(e.target.value) })} />
  </div>
  </>
  )
}
