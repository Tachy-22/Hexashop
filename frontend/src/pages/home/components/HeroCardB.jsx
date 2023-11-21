/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";

const HeroCardB = ({ category }) => {
  return (
    <>
      {category.uiBgImg ? (
        <div
          style={{ "--image-url": `url(${category.uiBgImg})` }}
          className="bg-[image:var(--image-url)]  rounded bg-cover xl:h-[22rem] md:h-[20rem]  h-[12rem]  flex justify-center items-center text-white bg-no-repeat bg-center duration-[3s] hover:bg-left-bottom   transition-all  "
        >
          <div className="flex flex-col md:gap-4 gap-2 justify-center items-center  h-full w-full backdrop-brightness-50">
            <div className="font-semibold capitalize text-xl">
              {" "}
              {category.cardUiName}
            </div>
            <p className="text-center">{category.cardDescriptionText}</p>
            <Link
              to={category.path}
              className="border-2 p-1 hover:border-blue-500 rounded"
            >
              {category.cardDescriptionPrompt}
            </Link>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HeroCardB;
