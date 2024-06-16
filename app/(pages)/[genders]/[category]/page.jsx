// app/[genders]/[category]/page.jsx

import BreadCrumbs from './[productId]/BreadCrumbs';
import FilterProducts from '@/components/filter/FilterProducts';
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
      <FilterProducts products={data} />
    </div>
  );
}
