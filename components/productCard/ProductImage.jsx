'use client';
import React from 'react';
import Image from 'next/image';

export default function ProductImage({ imageSrc, alt }) {
  return (
    <div className="relative">
      <Image
        src={imageSrc}
        alt={alt}
        width={200}
        height={200}
        className="w-full md:max-w-full h-56"
      />
    </div>
  );
}
