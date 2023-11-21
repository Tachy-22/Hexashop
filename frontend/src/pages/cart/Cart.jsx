import { Suspense, useEffect } from "react";
import useGetCart from "../../controls/hooks/useGetCart";
import ProductTable from "./components/ProductTable";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import BackNav from "../../components/BackNav";
import ProductTableMobile from "../../components/ProductTableMobile";

const Cart = () => {
  const [getMyCart] = useGetCart();
  const { myCart } = useSelector((state) => state.app);

  useEffect(() => {
    console.log("getting cart Items");
    getMyCart();
  }, [getMyCart]);

  return (
    <div className=" flex flex-col md:gap-[3.5rem] gap-4 xl:max-w-[90rem] mx-auto justify-center items-center xl:px-[10rem] md:p-[4rem] p-2   w-full -2 border-gray-400 h-max flex-grow lg:pt-[4rem]  pt-[3rem]  bg-gray-100 bg-gradient-to-r from-[10%] via-gray-100 from-black/20  carousel duration-[1s] bg-center transition-all xl:border- ">
      {myCart && myCart.length > 0 && (
        <div className="w-full h-full flex flex-col gap-2 ">
          <h2 className=" text-2xl h-max font-bold w-full text-start flex gap-2 border-green-300 pb-4 items-center">
            <div className=" border-blue-400 w-fit h-fit">
              {" "}
              <BackNav />
            </div>
            My Shopping Cart
          </h2>
          <Suspense fallback={<Loader />}>
            <div className="lg:flex flex-col hidden">
              <ProductTable />
            </div>
            <div className="flex flex-col lg:hidden">
              <ProductTableMobile />
            </div>
          </Suspense>
        </div>
      )}
      {myCart && myCart.length === 0 && <EmptyCartMessage />}
      {!myCart && <Loader />}
    </div>
  );
};

export default Cart;

const EmptyCartMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-[4rem] backdrop-brightness-[85%] w-full rounded-md">
      <p className="text-2xl mb-4">Your cart is currently empty.</p>
      <p className="text-lg mb-8">
        Log in to add items or explore our products!
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

//export default EmptyCartMessage;
