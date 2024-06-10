'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// Constants for categories and their images
const CATEGORY_IMAGES = {
  shoes: {
    men: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600',
    women: 'https://images.pexels.com/photos/2044228/pexels-photo-2044228.jpeg?auto=compress&cs=tinysrgb&w=800',
    kids: 'https://images.pexels.com/photos/15668367/pexels-photo-15668367/free-photo-of-couple-holding-kids-shoes-on-their-hands.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  pants: {
    men: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
    women: 'https://images.pexels.com/photos/7787186/pexels-photo-7787186.jpeg?auto=compress&cs=tinysrgb&w=800',
    kids: 'https://images.pexels.com/photos/5622955/pexels-photo-5622955.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  tshirts: {
    men: 'https://images.pexels.com/photos/3290886/pexels-photo-3290886.jpeg?auto=compress&cs=tinysrgb&w=800',
    women: 'https://images.pexels.com/photos/7945660/pexels-photo-7945660.jpeg?auto=compress&cs=tinysrgb&w=800',
    kids: 'https://images.pexels.com/photos/8208796/pexels-photo-8208796.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  swimwear: {
    men: 'https://images.pexels.com/photos/5694144/pexels-photo-5694144.jpeg?auto=compress&cs=tinysrgb&w=800',
    women: 'https://images.pexels.com/photos/2412721/pexels-photo-2412721.jpeg?auto=compress&cs=tinysrgb&w=800',
    kids: 'https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  shirts: {
    men: 'https://images.pexels.com/photos/11100293/pexels-photo-11100293.jpeg?auto=compress&cs=tinysrgb&w=800',
    women: 'https://images.pexels.com/photos/4065057/pexels-photo-4065057.jpeg?auto=compress&cs=tinysrgb&w=800',
    kids: 'https://images.pexels.com/photos/14693360/pexels-photo-14693360.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  underwear: {
    men: 'https://images.pexels.com/photos/8874882/pexels-photo-8874882.jpeg?auto=compress&cs=tinysrgb&w=800',
    women: 'https://images.pexels.com/photos/3471249/pexels-photo-3471249.jpeg?auto=compress&cs=tinysrgb&w=800',
    kids: 'https://images.pexels.com/photos/16190701/pexels-photo-16190701.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
};

// Function to generate the category link
function generateCategoryLink(pathname, category) {
  return `/${pathname.split('/')[1]}/${category}`;
}

// Function to get the image URL based on category and pathname
function getCategoryImage(pathname, category) {
  const gender = pathname.split('/')[1];
  if (!CATEGORY_IMAGES[category]) return '';
  return CATEGORY_IMAGES[category][gender] || '';
}

export default function CarouselCategories({ pathname }) {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [spaceBetween, setSpaceBetween] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1286) {
        setSlidesPerView(4);
        setSpaceBetween(30);
      } else if (width > 760) {
        setSlidesPerView(3);
        setSpaceBetween(20);
      } else if (width > 570) {
        setSlidesPerView(2);
        setSpaceBetween(20);
      } else {
        setSlidesPerView(1.3);
        setSpaceBetween(20);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <h1 className='text-4xl mt-8 px-4 lg:px-0'>קטיגוריות</h1>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper mt-8"
      >
        {Object.keys(CATEGORY_IMAGES).map((category) => (
          <SwiperSlide key={category}>
            <Link href={generateCategoryLink(pathname, category)}>
              <div
                className="flex-none flex items-center justify-center w-72 h-72 bg-gray-200"
                style={{
                  backgroundImage: `url(${getCategoryImage(pathname, category)})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                <h2 className='text-4xl text-white'>{category.toUpperCase()}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
