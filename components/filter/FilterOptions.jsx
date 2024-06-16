import React from 'react';

const FilterOptions = ({ allColors, allSizes, allBrands, handleColorChange, handleSizeChange, handlePriceRangeChange, handleSliderChange, handleBrandChange, selectedColors, selectedSizes, selectedPriceRange, priceRange, selectedBrands }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <span>₪0</span>
        <input
          type="range"
          id="priceRange"
          min="0"
          max="1000"
          value={priceRange.max}
          onChange={handleSliderChange}
          step="10"
          className="flex-grow"
        />
        <span>₪{priceRange.max}</span>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <h4 className="font-semibold">מחיר:</h4>
        <div>
          <label>
            <input
              type="radio"
              value="under200"
              onChange={handlePriceRangeChange}
              checked={selectedPriceRange === 'under200'}
              className="mr-2"
            />
            פחות מ ₪200
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="under400"
              onChange={handlePriceRangeChange}
              checked={selectedPriceRange === 'under400'}
              className="mr-2"
            />
            פחות מ ₪400
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="under1000"
              onChange={handlePriceRangeChange}
              checked={selectedPriceRange === 'under1000'}
              className="mr-2"
            />
            כל המוצרים
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <h4 className="font-semibold">צבע:</h4>
        {allColors.map(color => (
          <div key={color} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={color}
              onChange={() => handleColorChange(color)}
              checked={selectedColors.includes(color)}
              className="mr-2"
            />
            {color}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <h4 className="font-semibold">מידה:</h4>
        {allSizes.map(size => (
          <div key={size} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={size}
              onChange={() => handleSizeChange(size)}
              checked={selectedSizes.includes(size)}
              className="mr-2"
            />
            {size}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <h4 className="font-semibold">מותג:</h4>
        {allBrands.map(brand => (
          <div key={brand} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={brand}
              onChange={() => handleBrandChange(brand)}
              checked={selectedBrands.includes(brand)}
              className="mr-2"
            />
            {brand}
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterOptions;
