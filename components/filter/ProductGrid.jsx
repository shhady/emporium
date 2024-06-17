import React from 'react';
import ProductCard from '@/components/productCard/ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-2 md:p-6 w-full">
      {products.map(product => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductGrid;
