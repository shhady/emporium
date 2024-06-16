import React from 'react';
import { Button } from "@nextui-org/react";
import { ChevronDown } from 'lucide-react';

const FilterButton = ({ onOpen }) => {
  return (
    <div>
      <Button 
        onPress={onOpen} 
        className="bg-white md:hidden block"
      >
        <div className='flex justify-center items-center gap-2 text-[16px]'> 
          סינון לפי 
          <ChevronDown size={16} /> 
        </div>
      </Button>
      <div className="flex justify-center items-center">
        <div className="h-full w-[1px] bg-gray-300 mx-2" />
      </div>
    </div>
  );
};

export default FilterButton;
