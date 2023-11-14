import ProductTable from "./components/ProductTable";

const Cart = () => {
  return (
    <div className=" flex flex-col md:gap-[3.5rem] gap-4 xl:max-w-[90rem] mx-auto justify-center items-center xl:px-[10rem] md:p-[4rem] p-2 py-4 w-full -2 border-blue-600">
      <div className="w-full h-full flex flex-col gap-2">
        <h2 className=" text-2xl font-bold w-full text-start  border-green-300 py-4">
         My Shopping Cart
        </h2>

        <ProductTable />
      </div>
    </div>
  );
};

export default Cart;
