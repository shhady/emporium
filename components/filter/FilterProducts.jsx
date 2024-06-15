'use client'
import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';

function FilterProducts({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('');

  // Extract unique colors, sizes, and brands from the product data
  const allColors = [...new Set(products.flatMap(product => product.variants.map(variant => variant.color)))];
  const allSizes = [...new Set(products.flatMap(product => product.variants.flatMap(variant => variant.stock.map(stock => stock.size))))];
  const allBrands = [...new Set(products.map(product => product.brand))];

  useEffect(() => {
    applyFilters();
  }, [selectedColors, selectedSizes, priceRange, selectedPriceRange, selectedBrands, sortCriteria]);

  const applyFilters = () => {
    let filtered = products;

    // Filter by selected colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.variants.some(variant => selectedColors.includes(variant.color))
      );
    }

    // Filter by selected sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.variants.some(variant => 
          variant.stock.some(stock => selectedSizes.includes(stock.size))
        )
      );
    }

    // Filter by price range
    if (selectedPriceRange) {
      filtered = filtered.filter(product => {
        if (selectedPriceRange === 'under200') return product.price < 200;
        if (selectedPriceRange === 'under400') return product.price < 400;
        if (selectedPriceRange === 'under1000') return product.price <= 1000;
        return true;
      });
    } else {
      filtered = filtered.filter(product => 
        product.price >= priceRange.min && product.price <= priceRange.max
      );
    }

    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

    // Sort products based on sort criteria
    if (sortCriteria) {
      if (sortCriteria === 'priceLowHigh') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (sortCriteria === 'priceHighLow') {
        filtered.sort((a, b) => b.price - a.price);
      } else if (sortCriteria === 'latestAdded') {
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
    }

    setFilteredProducts(filtered);
  };

  const handleColorChange = (color) => {
    setSelectedColors(prevState =>
      prevState.includes(color) ? prevState.filter(c => c !== color) : [...prevState, color]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes(prevState =>
      prevState.includes(size) ? prevState.filter(s => s !== size) : [...prevState, size]
    );
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value === selectedPriceRange ? '' : e.target.value);
  };

  const handleSliderChange = (e) => {
    setPriceRange({ ...priceRange, max: parseFloat(e.target.value) });
    setSelectedPriceRange(''); // Deselect the radio buttons when the range slider is used
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands(prevState =>
      prevState.includes(brand) ? prevState.filter(b => b !== brand) : [...prevState, brand]
    );
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  return (
    <div>
      <div className="filters">
        <div>
          <label htmlFor="priceRange">Filter by Price Range: </label>
          <input
            type="range"
            id="priceRange"
            min="0"
            max="1000"
            value={priceRange.max}
            onChange={handleSliderChange}
            step="10"
          />
          <span>{`₪0 - ₪${priceRange.max}`}</span>
        </div>
        <div>
          <h4>Price Ranges:</h4>
          <div>
            <label>
              <input
                type="radio"
                value="under200"
                onChange={handlePriceRangeChange}
                checked={selectedPriceRange === 'under200'}
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
              />
              כל המוצרים
            </label>
          </div>
        </div>
        <div>
          <h4>Filter by Color:</h4>
          {allColors.map(color => (
            <div key={color}>
              <label>
                <input
                  type="checkbox"
                  value={color}
                  onChange={() => handleColorChange(color)}
                  checked={selectedColors.includes(color)}
                />
                {color}
              </label>
            </div>
          ))}
        </div>
        <div>
          <h4>Filter by Size:</h4>
          {allSizes.map(size => (
            <div key={size}>
              <label>
                <input
                  type="checkbox"
                  value={size}
                  onChange={() => handleSizeChange(size)}
                  checked={selectedSizes.includes(size)}
                />
                {size}
              </label>
            </div>
          ))}
        </div>
        <div>
          <h4>Filter by Brand:</h4>
          {allBrands.map(brand => (
            <div key={brand}>
              <label>
                <input
                  type="checkbox"
                  value={brand}
                  onChange={() => handleBrandChange(brand)}
                  checked={selectedBrands.includes(brand)}
                />
                {brand}
              </label>
            </div>
          ))}
        </div>
        <div>
          <h4>Sort By:</h4>
          <select onChange={handleSortChange} value={sortCriteria}>
            <option value="latestAdded">Latest Added</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-2 md:p-6'>
        {filteredProducts.map(product => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default FilterProducts;
