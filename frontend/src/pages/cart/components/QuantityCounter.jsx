/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import useUpdateCartItem from "../../../controls/hooks/useUpdateCartItem";

const QuantityCounter = ({ onChange, qty, product }) => {
  const [quantity, setQuantity] = useState(qty);

  const [updateCartItem] = useUpdateCartItem();

  const handleIncrement = useCallback(() => {
    setQuantity((prevQty) => {
      const newQty = prevQty + 1;
      onChange(newQty);
      updateCartItem(product,newQty);
      return newQty;
    });
  }, [onChange, product, updateCartItem]);

  const handleDecrement = useCallback(() => {
    if (quantity > 0) {
      setQuantity((prevQty) => {
        const newQty = prevQty - 1;
        onChange(newQty);
        updateCartItem(product,newQty);

        return newQty;
      });
    }
  }, [onChange, product, quantity, updateCartItem]);

  return (
    <div className="flex items-center gap-3 px-1">
      {/* <span>{quantity}</span> */}
      <div className="flex flex-col">
        <button className=" border-red-500 h-fit" onClick={handleIncrement}>
          <RiArrowUpSFill className="" />
        </button>
        <button className=" border-red-500 h-fit" onClick={handleDecrement}>
          <RiArrowDownSFill className="" />
        </button>
      </div>
    </div>
  );
};
export default QuantityCounter;
