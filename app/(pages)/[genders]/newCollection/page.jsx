
import ProductCard from '@/components/ProductCard';
import BreadCrumbs from '../[category]/[productId]/BreadCrumbs';
export default async function NewCollection ({  params }) {
  const {genders} = params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/products/gender?gender=${genders}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  console.log(data);
 
  return (
    <>
    <div className='flex justify-start items-center'>
    <BreadCrumbs route={params}/> קולקציה חדשה
    </div>
    
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-2 md:p-6'>
      {data.map((product) => (
       <ProductCard product={product} key={product._id}  gender={params.genders}/>
      ))}
    </div>
    </>
  );
};

