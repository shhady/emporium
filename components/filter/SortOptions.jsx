import React from 'react';

const SortOptions = ({ sortCriteria, handleSortChange }) => {
  return (
    <div className="flex flex-col gap-1 my-4 md:mb-4">
            <h4 className='hidden md:block font-bold'>סדר לפי:</h4>

      <select onChange={handleSortChange} value={sortCriteria} className='md:p-2'>
        <option value="latestAdded">התווסף לאחרונה</option>
        <option value="priceLowHigh">מחיר: נמוך לגבוה</option>
        <option value="priceHighLow">מחיר: גבוה לנמוך</option>
      </select>
    </div>
  );
};

export default SortOptions;
