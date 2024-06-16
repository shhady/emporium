import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import FilterOptions from './FilterOptions';

const FilterModal = ({ isOpen, onOpenChange, allColors, allSizes, allBrands, handleColorChange, handleSizeChange, handlePriceRangeChange, handleSliderChange, handleBrandChange, selectedColors, selectedSizes, selectedPriceRange, priceRange, selectedBrands }) => {
  return (
    <Modal 
      isOpen={isOpen} 
      onOpenChange={onOpenChange} 
      size="3xl"
      closeButton
      className="modal-container"
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">
            <h4>סינון לפי</h4>
          </ModalHeader>
          <ModalBody className="modal-body px-6 py-4">
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
  );
};

export default FilterModal;
