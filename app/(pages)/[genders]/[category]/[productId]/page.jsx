
import ProductInfo from '@/components/productDetails/ProductInfo';
import BreadCrumbs from './BreadCrumbs';
import TermsInfo from './TermsInfo';
export default async function ProductDetails ({params}) {
  // const [product, setProduct] = useState(null);
  const {productId} = params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/products/${params.productId}`);
  if (!response.ok) {
    return <div className='mt-8 flex justify-center items-center'>No products found</div>;;
  }
  const data = await response.json();
  console.log(data);
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='md:py-4 md:px-8'>
      <BreadCrumbs route={params} product={data}/>
      </div>
      <div className=' lg:px-36  md:px-16'>    
        <ProductInfo  product={data} productId={productId}/>
      </div>
      <TermsInfo />
    </div>
  );
};

// export default ProductDetails;
