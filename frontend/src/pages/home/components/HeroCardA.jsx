/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HeroCardA = ({ image }) => {
  return (
    <div
      style={{ "--image-url": `url(${image})` }}
      className="bg-[image:var(--image-url)]  rounded bg-cover h-full  flex justify-center items-center text-white bg-no-repeat bg-center duration-[3s] hover:bg-left-bottom   transition-all  "
    >
      <div className="flex flex-col md:gap-4 gap-2 justify-center items-center  h-full w-full backdrop-brightness-50">
        <div className="font-semibold capitalize md:text-5xl text-3xl">
          {" "}
          We are Hexashop
        </div>
        <p className="">Lorem ipsum dummy text</p>
        <Link
          to="/"
          className="border border-gray-500 rounded-md p-2 text-xl px-2 animate-blink-blue-pink hover:border-blue-500 hover:bg-blue-500 hover:text-white bg-black/75 text-white hover:scale-110 transition-all duration-700"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default HeroCardA;
