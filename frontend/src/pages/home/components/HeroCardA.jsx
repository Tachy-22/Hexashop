/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const HeroCardA = ({image}) => {
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
        <Link to="/" c className="border-2 p-1 hover:border-blue-500 rounded">
          Sign up
        </Link> 
      </div>
    </div>
  );
}

export default HeroCardA