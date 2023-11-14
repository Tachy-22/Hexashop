import { useState } from "react";
import dummyImage from "../../../assets/LoafersUiBgImg.jpg";
import { RiCloseLine } from "react-icons/ri";

import QuantityCounter from "./QuantityCounter";

const ProductTable = () => {
  const [products, setProducts] = useState([
    {
      image: dummyImage,
      name: "name 1",
      price: "100",
      qty: " 1",
      total: "100",
    },
    {
      image: dummyImage,
      name: "name 2",
      price: " 200",
      qty: "2",
      total: "400",
    },
    {
      image: dummyImage,
      name: "name 3",
      price: " 300",
      qty: " 3",
      total: "900",
    },
  ]);

  const addRow = () => {
    const newProduct = {
      image: dummyImage,
      name: "name ",
      price: "100",
      qty: " 1",
      total: " 100",
    };
    setProducts([...products, newProduct]);
  };

  const headertitles = ["item", "name", "price", "qty", "total"];

  const removeProduct = (row) => {
    const updatedRows = products.filter((product) => product !== row);
    setProducts(updatedRows);
  };

  const updateQuantityAndTotal = (index, newQty) => {
    const updatedProducts = [...products];
    updatedProducts[index].qty = newQty;
    updatedProducts[index].total =
      newQty * parseInt(updatedProducts[index].price); // Assuming price is a number
    setProducts(updatedProducts);
  };

  const calculateTotal = () => {
    let total = 0;
    products.forEach((product) => {
      total += parseInt(product.total);
    });
    return total;
  };

  console.log("current Product Data :", products);
  const salesCharge = 0;
  const shippingCharge = 0;
  return (
    <div>
      <button onClick={addRow}>Add Row +</button>

      <table className="w-full">
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
        <tbody className="w-full ">
          {products.map((row, index) => (
            <tr key={index} className="border-b border-gray-300 ">
              <td className=" p-4">
                <img
                  src={row.image}
                  alt="product image"
                  className="h-[4rem] min-w-[3rem] max-h-[3rem] w-[4rem]"
                />
              </td>
              <td className=" p-4 cursor-pointer">{row.name}</td>
              <td className=" p-4 cursor-pointer"> $ {row.price}</td>
              <td className="p-4 h-full border-gray-950 grid-cols-2">
                <div className="flex ">
                  <div>{row.qty}</div>
                  <QuantityCounter
                    onChange={(newQty) => updateQuantityAndTotal(index, newQty)}
                    qty={parseInt(row.qty)}
                  />
                </div>
              </td>
              <td className="p-4 h-full border-gray-950 grid-cols-2">
                <div className="flex justify-between">
                  <div className=" cursor-pointer border-black max-w-[5rem] w-[5rem] text-ellipsis text-red-500">
                    $ {row.total}
                  </div>
                  <button onClick={() => removeProduct(row)}>
                    <RiCloseLine className="text-xl" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex w-full flex-col items-end gap-3 border-red-500 p-4 py-6 text-gray-800 ">
        <div className="  border-red-500 flex w-fit gap-[1.5rem]">
          <div className="">Sub Total</div>
          <div className="font-bold ">$ {calculateTotal()}</div>
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
            $ {calculateTotal() + shippingCharge + salesCharge}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
