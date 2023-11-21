import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <div className="flex lg:flex-row flex-col md:gap-[3rem] gap-4 justify-center md:items-center bg-yellow-400 md:p-[2rem] p-[1rem] ">
      <p className="font-bold md:text-4xl text-2xl capitalize">
        Join The Hackshopers & get 15% off
      </p>
      <Link to="/" className="hover:bg-blue-500 border-2 rounded-md md:p-4 p-1 w-fit bg-purple-600 text-white font-bold">
        SIGN UP FOR FREE
      </Link>
    </div>
  );
};

export default Promo;
