import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <div className="flex lg:flex-row flex-col md:gap-[3rem] gap-4 justify-center md:items-center bg-yellow-400 p-[2rem]">
      <p className="font-bold text-4xl capitalize">
        Join The Hackshopers & get 15% off
      </p>
      <Link to="/" className="hover:bg-blue-500 border-2 rounded-md p-4 w-fit bg-purple-600 text-white font-bold">
        SIGN UP FOR FREE
      </Link>
    </div>
  );
};

export default Promo;
