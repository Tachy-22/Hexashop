import { useCallback } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

/* eslint-disable react/prop-types */
const NavMobile = ({ showMobileNav, setShowMobileNav, navKeys }) => {
  const handleShowMobileNav = useCallback(() => {
    setShowMobileNav((prev) => !prev);
  }, [setShowMobileNav]);

  return (
    <div
      className={`h-screen w-full -translate-x-[100%] z-20 absolute left-0 top-0 transition-all duration-1000 xl:hidden flex ${
        showMobileNav ? "translate-x-0" : ""
      } backdrop-blur-md justify-between`}
    >
      <div className="  md:w-[30%] w-full bg-secondary h-[100%]  flex flex-col justify-center items-center gap-4">
        <Link
          onClick={handleShowMobileNav}
          to="/"
          className="py-2 p-[1rem]  flex w-full"
          id="logo"
        >
          <img src={Logo} alt="" className="" />
        </Link>
        <div className="bg-black h-[1px] w-full "></div>
        <div className="flex flex-col justify-start items-center h-full w-full pb-[6rem] gap-2 px-[1rem] ">
          {navKeys.map((keys, index) => {
            return (
              <div
                onClick={handleShowMobileNav}
                key={index}
                className=" h-fit w-full  rounded-md border-gray-500 flex justify-center items-center"
              >
                <Link
                  to={`${keys.path}`}
                  className={` text-black capitalize h-fit px-2 py-1  rounded-md   w-full text-center flex justify-start items-center hover:bg-black/90 hover:text-white/70 gap-4`}
                >
                  <div className=""> {keys.icon}</div>
                  <p className="">{keys.keyName}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div
        onClick={handleShowMobileNav}
        className="   text-black cursor pointer h-full w-full flex justify-end p-1   "
      >
        {" "}
        <AiOutlineCloseCircle className="text-2xl hover:border border-gray-400" />
      </div>
    </div>
  );
};

export default NavMobile;
