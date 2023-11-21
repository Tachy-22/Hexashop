// FastSellingProducts.js
import { useEffect, useState } from "react";
//import DummyImage from "../../../assets/watchUiBgImg.jpg";
import ProductCard from "../../../components/ProductCard";
import { client } from "../../../../sanity-config";

const FastSellingProducts = () => {
 
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await client.fetch(`*[_type=="men"]{document,categories}`);
      const searchKey = "document";
      const searchValue = "Shirts";

      const result = res.find((item) => item[searchKey] === searchValue);

      if (result) {
        setData(result.categories);
      } else {
        console.log("Not found");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="  xl:px-[6rem] md:px-[2rem] px-4 xl:py-[3rem] md:py-[2rem] py-6 md:gap-[1rem] gap-2 bg-white flex h-fit  border-red-500 heroDropShadow flex-col  ">
      <h2 className="text-3xl font-bold mb-4">Fast Selling Products</h2>
      <div className="overflow-x-auto carousel border-red-400">
        <div
          className="flex  w-fit justify-between   gap-4 pb-4 border-green-400"
          id="carousel"
        >
          {data &&
            data[0].products.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  product={product}
                  style={`xl:w-[20rem] w-[15rem] `}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FastSellingProducts;
