// app/[genders]/[category]/page.jsx

import ProductCard from '@/components/ProductCard';
import BreadCrumbs from './[productId]/BreadCrumbs';
// import { fetchProductsByCategoryAndGender } from '@/lib/api'; // Assuming you have a utility function for API calls

export default async function ProductsByCategoryAndGender({ params }) {
  const { genders, category } = params;
  console.log(genders, category);
  // Fetch products from your backend API
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/products/categoryGender?category=${category}&gender=${genders}`,
  { next: { revalidate: 3600 } });
  if (!response.ok) {
    return <div className='mt-8 flex justify-center items-center'>No products found</div>;;
  }
  const data = await response.json();
  console.log(data);
  return (
    <div className='mt-4 lg:px-16'>
      <BreadCrumbs route={{ genders, category }} />
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-2 md:p-6'>
        {data?.map((product) => (
          <ProductCard key={product._id} product={product} gender={genders} />
        ))}
      </div>
    </div>
  );
}
