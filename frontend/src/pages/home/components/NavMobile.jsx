import { useCallback } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NavMobile = ({ showMobileNav, setShowMobileNav, navKeys }) => {
  const handleShowMobileNav = useCallback(() => {
    setShowMobileNav((prev) => !prev);
  }, [setShowMobileNav]);

  return (
    <div
      className={`h-screen w-full -translate-x-[100%] z-20 absolute left-0 bottom-0 transition-all duration-1000 lg:hidden flex ${
        showMobileNav ? "translate-x-0" : ""
      } backdrop-blur-md justify-between`}
    >
      <div className=" md:w-[45%] w-[90%] bg-secondary h-[100%] p-4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-evenly items-center h-full w-full py-[6rem] gap-4">
          {navKeys.map((keys, index) => {
            return (
              <div
                onClick={handleShowMobileNav}
                key={index}
                className=" h-fit w-full border rounded-md border-gray-500 flex justify-center items-center"
              >
                <Link
                  to={`${keys.path}`}
                  className={` text-black capitalize h-fit py-4 p-4 rounded-md  hover:underline w-full text-center flex justify-center items-center hover:bg-gray-700/70 hover:text-white`}
                >
                  {keys.keyName}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="  m-1 text-black cursor pointer h-fit w-fit p-1  hover:border border-gray-400"
        onClick={handleShowMobileNav}
      >
        {" "}
        <AiOutlineCloseCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default NavMobile;
