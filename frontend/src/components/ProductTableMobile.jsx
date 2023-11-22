import { useDispatch, useSelector } from "react-redux";
import useRemoveFromCart from "../controls/hooks/useRemoveFromCart";
import useCartQuantityUpdater from "../pages/cart/controls/hooks/useCartQuantityUpdater";
import useProductDetailPageNavigation from "../controls/hooks/useProductDetailPageNavigation";
import { useCallback, useMemo } from "react";
import { setMyCart } from "../react-redux/appSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import QuantityCounter from "../pages/cart/components/QuantityCounter";
import PurchaseSummary from "../pages/cart/components/PurchaseSummary";

const ProductTableMobile = () => {
  const dispatch = useDispatch();
  const [removeFromCart] = useRemoveFromCart();
  const updateQuantityAndTotal = useCartQuantityUpdater();
  const navigateToProductDetailPage = useProductDetailPageNavigation();

  const { myCart } = useSelector((state) => state.app);

  const removeProductFromTable = (row) => {
    const updatedRows = myCart?.filter((product) => product.data !== row);
    dispatch(setMyCart(updatedRows));
    removeFromCart(row);
  };

  const handleProductDetailNavigation = useCallback(
    (row) => {
      const product = row.data;
      const imageUrl = row.data.imageUrl;
      navigateToProductDetailPage(product, imageUrl);
    },
    [navigateToProductDetailPage]
  );

  const salesCharge = useMemo(() => 0, []);
  const shippingCharge = useMemo(() => 0, []);

  return (
    <div className="w-full h-max  justify justify-between">
      {myCart?.map((row, index) => (
        <div
          key={index}
          className="flex justify-evenly p-2 gap-[1rem] border-t"
        >
          <div className=" p-1 flex justify-center items-center h-full  ">
            <img
              onClick={() => {
                handleProductDetailNavigation(row);
              }}
              src={row.data.imageUrl}
              alt="product image"
              className="min-w-[3rem] w-[7rem] max-h-[6rem] min-h-[6rem] "
            />
          </div>
          <div className=" w-full">
            <p
              onClick={() => {
                handleProductDetailNavigation(row);
              }}
              className=" lg:p-4 p-2 px-0 cursor-pointer uppercase text-[0.8rem] font- text-gray-700 hover:underline underline-offset-4 w-full  border-red-500  lg:text-base"
            >
              {" "}
              {row.data.label}
            </p>
            <div className="flex justify-between items-center p-1">
              <p className="w-full font- text-lg ">${row.data.price}</p>
              <div className="flex justify-between items-center gap-1 text-sm ">
                <p className="text-gray-500 font-semibold">Qty</p>
                <span className="">{row.data.qty}</span>
                <div className="">
                  {" "}
                  <QuantityCounter
                    onChange={(newQty) => updateQuantityAndTotal(index, newQty)}
                    qty={parseInt(row.data.qty)}
                    product={row.data}
                  />
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => removeProductFromTable(row.data)} className="">
            <RiDeleteBin6Line className="text-red-400 hover:text-red-500 font-extrabold  text-2xl" />{" "}
          </div>
        </div>
      ))}
      <PurchaseSummary
        salesCharge={salesCharge}
        shippingCharge={shippingCharge}
      />
    </div>
  );
};

export default ProductTableMobile;
