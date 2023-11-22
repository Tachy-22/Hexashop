/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

const SimilarProducts = ({ categoryData, contrastColor }) => {
  return (
    <>
      {categoryData && (
        <div className=" flex flex-col  border-red-500 w-[95%] carousel h-full">
          <h3 className=" flex w-fit relative capitalize md:text-3xl text-xl font-semibold  md:my-[3rem] md:py-3  my-4">
            <p
              style={{
                color: contrastColor,
              }}
              className=" duration-[1s]  transition-all"
            >
              {" "}
              Similar Products
            </p>
          </h3>
          <div className="overflow-x-auto carousel border-red-400 z-10">
            <div
              className="flex  w-fit justify-between   gap-4 pb-4 border-green-400"
              id="carousel"
            >
              {categoryData.map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    product={product}
                    style={`md:w-[20rem] w-[15rem]`}
                    categoryData={categoryData}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SimilarProducts;
