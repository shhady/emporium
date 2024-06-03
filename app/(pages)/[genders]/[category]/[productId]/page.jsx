'use client'
import React, { useEffect, useState } from 'react';
import {SwiperDesktop,SwiperMobile} from '@/components/productSwiper/Swiper';
import ProductInfo from '@/components/productDetails/ProductInfo';
import BreadCrumbs from './BreadCrumbs';
import TermsInfo from './TermsInfo';
const ProductDetails = ({params}) => {
  const [product, setProduct] = useState(null);
  const [variants, setVariants] = useState({});
  const [chosenVariant, setChosenVariant] = useState({})
  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!params.productId) return;
      
      try {
        const response = await fetch(`/api/products/${params.productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const productDetails = await response.json();
        setProduct(productDetails);
        setVariants(productDetails.variants);
        setChosenVariant(productDetails.variants[0]);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [params.productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='md:py-4 md:px-8'>
      <BreadCrumbs route={params} product={product}/>
      </div>
      <div className=' hidden md:grid grid-cols-10 lg:px-36 px-48 md:px-16'>
        {/* {product.images.map((image, index) => ( */}
        <ProductInfo setChosenVariant={setChosenVariant} chosenVariant={chosenVariant} product={product} variants={variants} productId={params.productId}/>

      <div className='col-span-5'>
          <SwiperDesktop images={chosenVariant.images}/>
          </div>
       
      </div>
      <div className=' md:hidden'>
          <SwiperMobile images={chosenVariant.images} />
    
        <ProductInfo  setChosenVariant={setChosenVariant} chosenVariant={chosenVariant} product={product} variants={variants} productId={params.productId} heightForMobile={'h-1/2-screen'}/>
      </div>
      <TermsInfo />
    </div>
  );
};

export default ProductDetails;
