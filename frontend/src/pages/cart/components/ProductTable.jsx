import QuantityCounter from "./QuantityCounter";
import { useDispatch, useSelector } from "react-redux";
import { setMyCart } from "../../../react-redux/appSlice";
import { Suspense, useCallback, useMemo } from "react";
import Loader from "../../../components/Loader";
import useRemoveFromCart from "../../../controls/hooks/useRemoveFromCart";
import useProductDetailPageNavigation from "../../../controls/hooks/useProductDetailPageNavigation";
import useCartQuantityUpdater from "../controls/hooks/useCartQuantityUpdater";
import PurchaseSummary from "./PurchaseSummary";

const ProductTable = () => {
  const dispatch = useDispatch();
  const [removeFromCart] = useRemoveFromCart();
  const updateQuantityAndTotal = useCartQuantityUpdater();
  const navigateToProductDetailPage = useProductDetailPageNavigation();

  const { myCart } = useSelector((state) => state.app);
  const headertitles = useMemo(
    () => ["item", "name", "price", "qty", "total"],
    []
  );

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
    <>
      <table className="w-full h-max">
        <thead className=" border-green-300 bg-secondary px-3 py-[3rem] ">
          <tr>
            {headertitles.map((title, index) => {
              return (
                <th
                  key={index}
                  className="text-start capitalize p-4 font-medium "
                >
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>
        <Suspense fallback={<Loader />}>
          <tbody className="w-full capitalize">
            {myCart?.map((row, index) => (
              <tr key={index} className="border-b border-gray-300 ">
                <td className="  lg:p-4 p-1 flex justify-center items-center h-full">
                  <img
                    onClick={() => {
                      handleProductDetailNavigation(row);
                    }}
                    src={row.data.imageUrl}
                    alt="product image"
                    className="h-[4rem] min-w-[4rem] max-h-[5rem] w-[5rem] hover:border-yellow-300 hover:border"
                  />
                </td>
                <td
                  onClick={() => {
                    handleProductDetailNavigation(row);
                  }}
                  className=" lg:p-4 p-2 cursor-pointer uppercase text-[0.72rem] hover:underline underline-offset-4 lg:w-fit w-[20%]  border-red-500  lg:text-base"
                >
                  {row.data.label}
                </td>
                <td className=" p-4 "> ${row.data.price}</td>
                <td className="p-4 h-full border-gray-950 grid-cols-2">
                  <div className="flex justify-between items-center ">
                    <div>{row.data.qty}</div>
                    <QuantityCounter
                      onChange={(newQty) =>
                        updateQuantityAndTotal(index, newQty)
                      }
                      qty={parseInt(row.data.qty)}
                      product={row.data}
                    />
                  </div>
                </td>
                <td className="p-4 h-full border-gray-950 grid-cols-2">
                  <div className="flex justify-between gap-[1rem]">
                    <div className=" border-black max-w-[5rem]  text-ellipsis text-red-500 text-center flex items-center  ">
                      ${row.data.total}
                    </div>
                    <button
                      className="flex justify-between items-center gap-2 "
                      onClick={() => removeProductFromTable(row.data)}
                    >
                      <div className="hover:bg-red-400 bg-red-500 text-white p-2 py-1 rounded-md lg:text-base text-sm">
                        {" "}
                        Remove Item
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Suspense>
      </table>
      <PurchaseSummary
        salesCharge={salesCharge}
        shippingCharge={shippingCharge}
      />
    </>
  );
};

export default ProductTable;
