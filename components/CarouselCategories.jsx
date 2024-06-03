

import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function CarouselCategories({pathname}) {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [spaceBetween, setSpaceBetween] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1286) {
        setSlidesPerView(4); // For desktop
        setSpaceBetween(30); // Adjust the space between slides as needed
      } 
      else if(window.innerWidth > 760 && window.innerHeight <=1286) {
        setSlidesPerView(3); // For mobile
        setSpaceBetween(20); // Adjust the space between slides as needed
      }  else if(window.innerWidth > 570 && window.innerHeight <=760) {
        setSlidesPerView(2); // For mobile
        setSpaceBetween(20); // Adjust the space between slides as needed
      }
       else if(window.innerWidth < 500) {
        setSlidesPerView(1.3); // For mobile
        setSpaceBetween(20); // Adjust the space between slides as needed
      }
    };

    handleResize(); // Call the function once to set initial state

    window.addEventListener('resize', handleResize); // Listen to window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);
  const imagesOf = {
    shoes:{
      men:'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      women:'https://images.pexels.com/photos/2044228/pexels-photo-2044228.jpeg?auto=compress&cs=tinysrgb&w=800',
      kids:'https://images.pexels.com/photos/15668367/pexels-photo-15668367/free-photo-of-couple-holding-kids-shoes-on-their-hands.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    pants:{
      men:'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
      women:'https://images.pexels.com/photos/7787186/pexels-photo-7787186.jpeg?auto=compress&cs=tinysrgb&w=800',
      kids:'https://images.pexels.com/photos/5622955/pexels-photo-5622955.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    tshirts:{
      men:'https://images.pexels.com/photos/3290886/pexels-photo-3290886.jpeg?auto=compress&cs=tinysrgb&w=800',
      women:'https://images.pexels.com/photos/7945660/pexels-photo-7945660.jpeg?auto=compress&cs=tinysrgb&w=800',
      kids:'https://images.pexels.com/photos/8208796/pexels-photo-8208796.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    swimwear:{
      men:'https://images.pexels.com/photos/5694144/pexels-photo-5694144.jpeg?auto=compress&cs=tinysrgb&w=800',
      women:'https://images.pexels.com/photos/2412721/pexels-photo-2412721.jpeg?auto=compress&cs=tinysrgb&w=800',
      kids:'https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  }
  return (
    <>
     <h1 className='text-4xl mt-8 px-4 lg:px-0'>קטיגוריות</h1>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-8"
      >
        <SwiperSlide>
        <div className={`flex-none flex items-center justify-center w-72 h-72 bg-gray-200 z`} style={{backgroundImage:`url(${pathname === '/men' ? imagesOf.shoes.men : pathname === '/women' ? imagesOf.shoes.women: imagesOf.shoes.kids})`, backgroundPosition:'center', backgroundSize:"cover"}}>
        {/* <p className="text-2xl">Item 1</p> */}
      
        <h2 className=' text-4xl text-white'>SHOES</h2>
      </div>
          
        </SwiperSlide>
        <SwiperSlide><div className="flex-none flex items-center justify-center w-72 h-72 bg-gray-200" style={{backgroundImage:`url(${pathname === '/men' ? imagesOf.tshirts.men : pathname === '/women' ? imagesOf.tshirts.women: imagesOf.tshirts.kids})`, backgroundPosition:'center', backgroundSize:"cover"}}>
        {/* <p className="text-2xl">Item 1</p> */}
        {/* <Image src='/women.jpg' alt='' width={100} height={100} className='w-full h-full' /> */}
        <h2 className='text-4xl text-white'>{pathname === '/men' || pathname === '/kids' ? "T-Shirts" : 'Tops'}</h2>
      </div></SwiperSlide>
        <SwiperSlide><div className={`flex-none flex items-center justify-center w-72 h-72 bg-gray-200`} style={{backgroundImage:`url(${pathname === '/men' ? imagesOf.pants.men : pathname === '/women' ? imagesOf.pants.women: imagesOf.pants.kids})`, backgroundPosition:'center', backgroundSize:"cover"}}>
        {/* <p className="text-2xl">Item 1</p> */}
        {/* <Image src='/women.jpg' alt='' width={100} height={100} className='w-full h-full' /> */}
        <h2 className='text-4xl text-white'>PANTS</h2>
      </div></SwiperSlide>
      {pathname === '/men' &&   <SwiperSlide> <div className="flex-none flex items-center justify-center w-72 h-72 bg-gray-200 bg-[url('https://images.pexels.com/photos/8874882/pexels-photo-8874882.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center">
        {/* <p className="text-2xl">Item 1</p> */}
        {/* <Image src='/women.jpg' alt='' width={100} height={100} className='w-full h-full' /> */}
        <h2 className='text-4xl text-white'>UNDERWEAR</h2>
      </div></SwiperSlide>}
      {pathname === '/men' && <SwiperSlide>  <div className="flex-none flex items-center justify-center w-72 h-72 bg-gray-200 bg-[url('https://images.pexels.com/photos/11100293/pexels-photo-11100293.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center">
        {/* <p className="text-2xl">Item 1</p> */}
        {/* <Image src='/women.jpg' alt='' width={100} height={100} className='w-full h-full' /> */}
        <h2 className='text-4xl text-white'>SHIRTS</h2>
      </div></SwiperSlide>}
        <SwiperSlide> <div className="flex-none flex items-center justify-center w-72 h-72 bg-gray-200" style={{backgroundImage:`url(${pathname === '/men' ? imagesOf.swimwear.men : pathname === '/women' ? imagesOf.swimwear.women: imagesOf.swimwear.kids})`, backgroundPosition:'center', backgroundSize:"cover"}}>
        {/* <p className="text-2xl">Item 1</p> */}
        {/* <Image src='/women.jpg' alt='' width={100} height={100} className='w-full h-full' /> */}
        <h2 className='text-4xl text-white'>SWIMWEAR</h2>
      </div></SwiperSlide>
      {pathname === '/men' && <SwiperSlide> <div className="flex-none flex items-center justify-center w-72 h-72 bg-gray-200 bg-[url('https://images.pexels.com/photos/14999470/pexels-photo-14999470/free-photo-of-man-sitting-at-the-airport.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center">
        {/* <p className="text-2xl">Item 1</p> */}
        {/* <Image src='/women.jpg' alt='' width={100} height={100} className='w-full h-full' /> */}
        <h2 className='text-4xl text-white'>SWEATSHIRTS</h2>
      </div></SwiperSlide>}
       
      </Swiper>
    </>
  );
}