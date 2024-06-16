'use client';
import React, { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import ProductCard from '@/components/ProductCard';
import {ChevronDown} from 'lucide-react'
function FilterProducts({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('');
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
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
    <div className="flex flex-col md:flex-row gap-4">
      {/* Filter button for small screens */}
      <div className='flex justify-around items-center border-solid border-2 mt-2'>
      <Button 
        onPress={onOpen} 
        className="bg-white md:hidden block "
      >
        <div className='flex justify-center items-center gap-2 text-[16px]'> 
        סינונן לפי 
        <ChevronDown size={16} /> 
        
        </div>
      </Button>
      <div className="flex flex-col gap-1 my-4 md:hidden">
          {/* <h4 className="font-semibold">הצג לפי:</h4> */}
          <select onChange={handleSortChange} value={sortCriteria} >
            <option value="latestAdded">התווסף לאחרונה</option>
            <option value="priceLowHigh">מחיר: נמוך לגבוה</option>
            <option value="priceHighLow">מחיר: גבוה לנמוך</option>
          </select>
        </div>
      </div>
      
      {/* Filters for larger screens */}
      <div className="filters hidden md:block md:w-1/4 px-4 py-6 bg-gray-100 rounded-md mt-6">
        {renderFilters()}
      </div>

      {/* Modal for small screens */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        size="3xl"
        closeButton
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h4>סינון לפי</h4>
            </ModalHeader>
            <ModalBody className="px-6 py-4">
              {renderFilters()}
            </ModalBody>
            <ModalFooter className="flex justify-end">
              <Button 
                onPress={() => onOpenChange(false)} 
                className="bg-blue-500 text-white"
              >
                Apply Filters
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>

      {/* Products grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-2 md:p-6">
        {filteredProducts.map(product => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );

  function renderFilters() {
    return (
      <>
        <div className="hidden gap-1 mb-6  md:flex md:flex-col">
          <h4 className="font-semibold">הצג לפי:</h4>
          <select onChange={handleSortChange} value={sortCriteria}>
          <option value="latestAdded">התווסף לאחרונה</option>
            <option value="priceLowHigh">מחיר: נמוך לגבוה</option>
            <option value="priceHighLow">מחיר: גבוה לנמוך</option>
          </select>
        </div>
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
  }
}

export default FilterProducts;
