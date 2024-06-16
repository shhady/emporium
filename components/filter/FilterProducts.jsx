'use client';
import React, { useState, useEffect } from 'react';
import FilterOptions from './FilterOptions';
import SortOptions from './SortOptions';
import FilterModal from './FilterModal';
import FilterButton from './FilterButton';
import ProductGrid from './ProductGrid';
import { useDisclosure } from "@nextui-org/react";
import './style.css'

function FilterProducts({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  const allColors = [...new Set(products.flatMap(product => product.variants.map(variant => variant.color)))];
  const allSizes = [...new Set(products.flatMap(product => product.variants.flatMap(variant => variant.stock.map(stock => stock.size))))];
  const allBrands = [...new Set(products.map(product => product.brand))];

  useEffect(() => {
    applyFilters();
  }, [selectedColors, selectedSizes, priceRange, selectedPriceRange, selectedBrands, sortCriteria]);

  const applyFilters = () => {
    let filtered = products;

    if (selectedColors.length > 0) {
      filtered = filtered.filter(product => 
        product.variants.some(variant => selectedColors.includes(variant.color))
      );
    }

    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.variants.some(variant => 
          variant.stock.some(stock => selectedSizes.includes(stock.size))
        )
      );
    }

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

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }

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
    setSelectedPriceRange('');
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
    <div className="flex flex-col md:flex-row gap-4">
      {/* Filter button for small screens */}
      <div className='flex justify-around items-center border-solid border-2 mt-2 md:hidden'>
      <FilterButton onOpen={onOpen} />
      <SortOptions sortCriteria={sortCriteria} handleSortChange={handleSortChange} />
      </div>
      {/* Filters for larger screens */}
      <div className="filters hidden md:block md:w-1/4 px-4 py-6 bg-gray-100 rounded-md mt-6">
      <SortOptions sortCriteria={sortCriteria} handleSortChange={handleSortChange} />
        <FilterOptions 
          allColors={allColors}
          allSizes={allSizes}
          allBrands={allBrands}
          handleColorChange={handleColorChange}
          handleSizeChange={handleSizeChange}
          handlePriceRangeChange={handlePriceRangeChange}
          handleSliderChange={handleSliderChange}
          handleBrandChange={handleBrandChange}
          selectedColors={selectedColors}
          selectedSizes={selectedSizes}
          selectedPriceRange={selectedPriceRange}
          priceRange={priceRange}
          selectedBrands={selectedBrands}
        />
      </div>

      {/* Modal for small screens */}
      <FilterModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        allColors={allColors}
        allSizes={allSizes}
        allBrands={allBrands}
        handleColorChange={handleColorChange}
        handleSizeChange={handleSizeChange}
        handlePriceRangeChange={handlePriceRangeChange}
        handleSliderChange={handleSliderChange}
        handleBrandChange={handleBrandChange}
        selectedColors={selectedColors}
        selectedSizes={selectedSizes}
        selectedPriceRange={selectedPriceRange}
        priceRange={priceRange}
        selectedBrands={selectedBrands}
      />

      {/* Products grid */}
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default FilterProducts;
