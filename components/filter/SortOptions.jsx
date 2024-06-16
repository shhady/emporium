import React from 'react';

const SortOptions = ({ sortCriteria, handleSortChange }) => {
  return (
    <div className="flex flex-col gap-1 my-4">
      <select onChange={handleSortChange} value={sortCriteria}>
        <option value="latestAdded">התווסף לאחרונה</option>
        <option value="priceLowHigh">מחיר: נמוך לגבוה</option>
        <option value="priceHighLow">מחיר: גבוה לנמוך</option>
      </select>
    </div>
  );
};

export default SortOptions;
