import React from 'react'
import Modal from '../modal/Modal';

export default function AddToCartModal({product}) {
  return (
    <div className="rounded-full p-[5px] flex justify-center items-center">
        <Modal product={product} />
      </div>
  )
}
