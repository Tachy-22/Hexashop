import { useEffect, useState } from "react";
//import DummyImage from "../../../assets/menUiBgImg.jpg";

import ProductCard from "../../../components/ProductCard";
import { client } from "../../../../sanity-config";

const LatestUi = () => {
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
    <div className=" flex flex-col md:gap-[3.5rem] gap-4 xl:px-[6rem] md:p-[4rem] p-2 py-4">
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
              <div className="overflow-x-auto carousel border-red-400">
                <div
                  className="flex  w-fit justify-between   gap-4 pb-4 border-green-400"
                  id="carousel"
                >
                  {category.products.map((product, index) => {
                    return (
                      <ProductCard
                        key={index}
                        product={product}
                        style={
                          "xl:min-w-[20rem] md:min-w-[17rem] min-w-[10rem]"
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default LatestUi;
