import React from 'react';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

const SizesButtons = ({ stock, toggleSize, updateQuantity }) => {
  return (
    <div>
      {sizes.map(size => (
        <div key={size} className="flex items-center gap-2">
          <button
            type="button"
            className={`p-2 w-16 border ${stock.some(item => item.size === size) ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
            onClick={() => toggleSize(size)}
          >
            {size}
          </button>
          {stock.some(item => item.size === size) && (
            <input
              type="number"
              className="border p-1"
              placeholder="Quantity"
              onChange={(e) => updateQuantity(size, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SizesButtons;
