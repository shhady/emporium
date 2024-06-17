'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Individual filter components with toggle functionality

const ColorFilter = ({ colors, selectedColors, onColorChange }) => {
    const [showColors, setShowColors] = useState(false);
  
    const handleColorChange = (color) => {
      onColorChange(color); // Propagate the change to the parent component
    };
  
    // Check if any color is selected
    const somethingSelected = selectedColors.length > 0;
  
    return (
      <div className="flex flex-col gap-1 mt-2">
        <div className={`flex justify-between items-center rounded-lg border-1 border-gray-300 p-2 ${somethingSelected ? "bg-gray-200" : "bg-transparent"}`} onClick={() => setShowColors(prev => !prev)}>
          <h4 className="font-semibold cursor-pointer">
            צבע
          </h4>
          {showColors ? <ChevronUp /> : <ChevronDown />}
        </div>
        {showColors && (
          <div className="flex flex-col gap-1">
            {colors.map(color => (
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
        )}
      </div>
    );
  };
  

  const SizeFilter = ({ sizes, selectedSizes, onSizeChange }) => {
    const [showSizes, setShowSizes] = useState(false);
  
    const handleSizeChange = (size) => {
      onSizeChange(size); // Propagate the change to the parent component
    };
  
    // Check if any size is selected
    const somethingSelected = selectedSizes.length > 0;
  
    return (
      <div className="flex flex-col gap-1 mt-2">
        <div className={`flex justify-between items-center rounded-lg border-1 border-gray-300 p-2 ${somethingSelected ? "bg-gray-200" : "bg-transparent"}`} onClick={() => setShowSizes(prev => !prev)}>
          <h4 className="font-semibold cursor-pointer">
            מידה
          </h4>
          {showSizes ? <ChevronUp /> : <ChevronDown />}
        </div>
        {showSizes && (
          <div className="flex flex-col gap-1">
            {sizes.map(size => (
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
        )}
      </div>
    );
  };
  

const BrandFilter = ({ brands, selectedBrands, onBrandChange }) => {
    const [showBrands, setShowBrands] = useState(false);
  
    const handleBrandChange = (brand) => {
      onBrandChange(brand); // Propagate the change to the parent component
    };
  
    // Check if any brand is selected
    const somethingSelected = selectedBrands.length > 0;
  
    return (
      <div className="flex flex-col gap-1 mt-2">
        <div className={`flex justify-between items-center rounded-lg border-1 border-gray-300 p-2 ${somethingSelected ? "bg-gray-200" : "bg-transparent"}`} onClick={() => setShowBrands(prev => !prev)}>
          <h4 className="font-semibold cursor-pointer">
            מותג
          </h4>
          {showBrands ? <ChevronUp /> : <ChevronDown />}
        </div>
        {showBrands && (
          <div className="flex flex-col gap-1">
            {brands.map(brand => (
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
        )}
      </div>
    );
  };
  
// Price filter component with always visible range input
const PriceFilter = ({
  handlePriceRangeChange, selectedPriceRange, priceRange, handleSliderChange
}) => {
  const [showPriceFilters, setShowPriceFilters] = useState(false);

  return (
    <div className="flex flex-col gap-1 mt-2">
      
      <div className="flex justify-between items-center mt-2 rounded-lg border-1 border-gray-300 p-2" onClick={() => setShowPriceFilters(prev => !prev)}>
        <h4 className="font-semibold cursor-pointer">
          מחיר
        </h4>
        {showPriceFilters ? <ChevronUp /> : <ChevronDown />}
      </div>
      {showPriceFilters && (
        <div className="flex flex-col gap-1 mt-2">
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
      )}
    </div>
  );
};

// Main filter options component
const FilterOptions = ({
  allColors, allSizes, allBrands,
  handleColorChange, handleSizeChange, handleBrandChange,
  selectedColors, selectedSizes, selectedBrands,
  handlePriceRangeChange, selectedPriceRange, priceRange, handleSliderChange
}) => {
  return (
    <>
    <h4 className='hidden md:block font-bold'>סינון לפי:</h4>
      <PriceFilter 
        handlePriceRangeChange={handlePriceRangeChange} 
        selectedPriceRange={selectedPriceRange} 
        priceRange={priceRange} 
        handleSliderChange={handleSliderChange} 
      />
      <ColorFilter 
        colors={allColors} 
        selectedColors={selectedColors} 
        onColorChange={handleColorChange} 
      />
      <SizeFilter 
        sizes={allSizes} 
        selectedSizes={selectedSizes} 
        onSizeChange={handleSizeChange} 
      />
      <BrandFilter 
        brands={allBrands} 
        selectedBrands={selectedBrands} 
        onBrandChange={handleBrandChange} 
      />
    </>
  );
};

export default FilterOptions;
