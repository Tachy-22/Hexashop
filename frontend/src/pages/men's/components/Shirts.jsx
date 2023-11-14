import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";

import { client } from "../../../../sanity-config";
const Shirts = () => {
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
    <div className="  flex flex-col md:gap-[3.5rem] gap-4  border-red-500">
      {" "}
      {data &&
        data.map((category, index) => {
          return (
            <div key={index} className="flex flex-col justify-center gap-2 4 ">
              <h2 className="text-3xl text-black capitalize font-semibold">
                {" "}
                {category.category}
              </h2>
              <p className="">{category.description}</p>

              <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 xl:gap-[1rem] border-black">
                {category.products.map((product, index) => {
                  return (
                    <div className="  border-red-300" key={index}>
                      <ProductCard product={product} style={""} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Shirts;
