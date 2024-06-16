import React from 'react';
import ProductCard from '@/components/ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-2 md:p-6">
      {products.map(product => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductGrid;
