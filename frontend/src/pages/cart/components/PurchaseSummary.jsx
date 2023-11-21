/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { calculateTotalItemPrice } from "../controls/calculateTotalItemPrice";
import { totalPayablePrice } from "../controls/totalPayablePrice";

const PurchaseSummary = ({ salesCharge, shippingCharge }) => {
  const { myCart } = useSelector((state) => state.app); 

  return (
    <div className="flex w-full flex-col items-end gap-3 border-red-500 p-4 py-6 text-gray-800 ">
      <div className="  border-red-500 flex w-fit gap-[1.5rem]">
        <div className="">Sub Total</div>
        <div className="font-bold ">$ {calculateTotalItemPrice(myCart)}</div>
      </div>
      <div className="  border-red-500 flex w-fit gap-[1.5rem]">
        <div className="">Shipping Charge</div>
        <div>$ {shippingCharge}</div>
      </div>
      <div className="  border-red-500 flex w-fit gap-[1.5rem]">
        <div className="">Sales Charge</div>
        <div>$ {salesCharge}</div>
      </div>
      <div className=" text-md font- border-red-500 flex w-fit gap-[1.5rem]">
        <div className="">Total Amolunt</div>
        <div className="font-bold  text-red-500">
          ${" "}
          {totalPayablePrice(
            calculateTotalItemPrice,
            shippingCharge,
            salesCharge,
            myCart
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseSummary;
