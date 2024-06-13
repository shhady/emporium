'use client'


import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode,EffectFade, Navigation, Thumbs,Pagination } from 'swiper/modules';


export function SwiperDesktop({images}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        if (thumbsSwiper) {
          thumbsSwiper.update();
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [thumbsSwiper]);

  return (
    <div  style={{ display: 'flex', gridTemplateColumns: '9fr 1fr', gap: '10px' }}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-9/12"
      >
         {images.map((image)=>{
            return <SwiperSlide key={image}>
                <Image width={1000} height={1000} src={image} alt='product image' className='mainPhoto'/>
             </SwiperSlide>
        })}
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="paginationSwiper"
        direction='vertical'
      >
        {images.map((image)=>{
            return <SwiperSlide key={image}>
                <Image width={1000} height={1000}  src={image} alt='product image' style={{height:'90px', width:'100px', objectFit:'cover', border:"1px solid #b9b8b8"}}/>
             </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
}

export function SwiperMobile({images, productId}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
         {images.map((image)=>{
            return <SwiperSlide key={image}>
              {productId ? (<Image width={1000} height={1000}  src={image} alt='product image' className='mainPhoto'/>
):(                <Image width={1000} height={1000} alt='product image' src={image}  className='mainPhotoModal'/>
)}
             </SwiperSlide>
        })}
        
      </Swiper>
     
    </div>
  );
}

