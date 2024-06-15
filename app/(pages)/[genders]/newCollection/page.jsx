import ProductCard from '@/components/ProductCard';
import BreadCrumbs from '../[category]/[productId]/BreadCrumbs';
import FilterProducts from '@/components/filter/FilterProducts';

export default async function NewCollection({ params }) {
  const { genders } = params;

  // Fetch products based on gender
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/products/gender?gender=${genders}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();

  return (
    <>
      <div className='flex justify-start items-center'>
        <BreadCrumbs route={params} /> קולקציה חדשה
      </div>
      <FilterProducts products={data} />
    </>
  );
}
