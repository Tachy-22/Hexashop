import Jackets from "./Jackets";
import Jeans from "./Jeans";
import Shirts from "./Shirts";
import Shoes from "./Shoes";
import Trousers from "./Trousers";

const All = () => {
  return (
    <div className="fle flex-col">
      <Shoes />
      <Jeans />
      <Trousers />
      <Jackets />
      <Shirts />
    </div>
  );
};

export default All;
