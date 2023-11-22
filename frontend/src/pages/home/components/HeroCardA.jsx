/* eslint-disable react/prop-types */

import { useMemo } from "react";

//import { Link } from "react-router-dom";

const HeroCardA = ({ image }) => {
  const imgUrl = useMemo(() => image, [image]);
  return (
    <div
      style={{ "--image-url": `url(${imgUrl})` }}
      className="bg-[image:var(--image-url)]  rounded bg-cover h-full  flex justify-center items-center text-white bg-no-repeat bg-center lg:duration-[3s] duration-[1s] lg:hover:bg-left-bottom   transition-all cursor-pointer "
    >
      <div className="flex flex-col md:gap-4 gap-2 justify-center items-center  h-full w-full backdrop-brightness-50">
        <div className=" capitalize md:text-5xl text-3xl text-blue-100 font-bold">
          {" "}
          We are Hexashop
        </div>
        <p className=" justify-center flex items-center text-center p-4 sm:text-[1rem] text-sm font-bold">
          Embark on a style journey with Hexashop - where fashion meets
          innovation. Discover the latest trends, timeless classics, and
          everything in between.
        </p>
        <p className=" text-center text-white/80  sm:text-[1rem] text-sm">
          Welcome to Hexashop - Your Ultimate Fashion Destination
        </p>
      </div>
    </div>
  );
};

export default HeroCardA;
