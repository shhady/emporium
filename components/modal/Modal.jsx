'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { ShoppingBag } from 'lucide-react';
import ProductInfo from "../productDetails/ProductInfo";
import "./style.css"
export default function MyModal({product}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");

  const handleFavClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <div className="flex flex-col gap-2" onClick={handleFavClick}>
<Button isIconOnly onPress={onOpen} className="flex flex-col justify-center items-center bg-transparent">
    <div className='rounded-full border border-black p-2'>
  <ShoppingBag size={16}/>
    </div>
</Button>      
      <Modal 
        isOpen={isOpen} 
        placement={modalPlacement}
        onOpenChange={onOpenChange} 
        size='5xl'
        className="modal-container "
      >
        <ModalContent>
          {(onClose) => (
            <>
            
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody className=" px-6 py-4">
                <div>

                <ProductInfo product={product} onPress={onClose}/>
                </div>
                
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
