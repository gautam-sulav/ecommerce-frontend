import Wrapper from "../components/Wrapper";
import HeroBanner from "../components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const { data } = await fetchDataFromApi("/api/products");
  //   setData(data);
  // };

  return (
    <main className="">
      <HeroBanner />
      {/* <h1>{products?.data?.[0]?.attributes?.name}</h1> */}
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Getting With Dronmandu
          </div>
          <div className="text-md md:text-xl">
            A team of innovative people trying to make online shopping easy and
            more reliable with fast delivery, better quality all over Nepal.
          </div>
        </div>
        {/* heading and paragaph end */}
        {/* Product grid start  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/* product grid etti  */}
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}
