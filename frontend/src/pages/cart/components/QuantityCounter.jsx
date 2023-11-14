/* eslint-disable react/prop-types */
import { useState } from "react";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

const QuantityCounter = ({ onChange, qty }) => {
  const [quantity, setQuantity] = useState(qty);

  const handleIncrement = () => {
    setQuantity((prevQty) => {
      const newQty = prevQty + 1;
      onChange(newQty);
      return newQty;
    });
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQty) => {
        const newQty = prevQty - 1;
        onChange(newQty);
        return newQty;
      });
    }
  };

  return (
    <div className="flex items-center gap-3 px-4">
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
