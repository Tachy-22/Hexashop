/* eslint-disable react/prop-types */
import { Suspense, useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import { client } from "../../sanity-config";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineStatus } from "../react-redux/appSlice";
const CategoryProductDisplay = ({ searchValue }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const { isOnLine } = useSelector((state) => state.app);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.fetch(`*[_type=="men"]{document,categories}`);
        const searchKey = "document";

        const result = res.find((item) => item[searchKey] === searchValue);

        if (result) {
          setData(result.categories);
        } else {
          console.log("Not found");
        }
         dispatch(setOnlineStatus(true));
      } catch (error) {
        console.error("fetch failed", error);
        dispatch(setOnlineStatus(false))
      }
    }
    fetchData();
  }, [dispatch, searchValue]);

  console.log("isOnLine :", isOnLine);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="  flex flex-col md:gap-[3.5rem] gap-4 w-full border-red-500 justify-center">
        {" "}
        {data &&
          data.map((category, index) => {
            return (
              <div key={index} className="flex flex-col justify-center gap-2  ">
                <h2 className="text-3xl text-black capitalize font-semibold">
                  {" "}
                  {category.category}
                </h2>
                <p className="">{category.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-1 border-black py-4">
                  {category.products.map((product, index) => {
                    return (
                      <div className="  border-red-300" key={index}>
                        <ProductCard
                          product={product}
                          style={""}
                          categoryData={category.products}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        {!data && <Loader />}
      </div>
    </Suspense>
  );
};

export default CategoryProductDisplay;
