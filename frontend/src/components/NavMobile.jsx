import { useCallback } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { BsCart } from "react-icons/bs";
import { cartPath } from "../routing/paths";

/* eslint-disable react/prop-types */
const NavMobile = ({
  showMobileNav,
  setShowMobileNav,
  navKeys,
  handleSignOut,
  logedInUser,
}) => {
  const handleShowMobileNav = useCallback(() => {
    setShowMobileNav((prev) => !prev);
  }, [setShowMobileNav]);

  return (
    <div
      className={`h-screen w-full -translate-x-[100%] z-20 absolute left-0 top-0 bottom-0 transition-all duration-1000 xl:hidden flex ${
        showMobileNav ? "translate-x-0" : ""
      } backdrop-blur-md justify-between`}
    >
      <div className="  md:w-[30%] sm:w-[60%] w-full bg-secondary h-[100%]  flex flex-col justify-center items-center gap-4">
        <Link
          onClick={handleShowMobileNav}
          to="/"
          className="py-2 p-[1rem] pl-1 border-b border-black flex w-full justify-start"
          id="logo"
        >
          <img src={Logo} alt="" className="" />
        </Link>

        <div className="flex flex-col justify-start items-center h-full  w-full  gap-2 px-[0.5rem] ">
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

          <div className=" h-fit w-full  rounded-md border-gray-500 flex justify-center items-center">
            <Link
              to={`${cartPath}`}
              className={` text-black capitalize h-fit px-2 py-1  rounded-md   w-full text-center flex justify-start items-center hover:bg-black/90 hover:text-white/70 gap-4`}
            >
              <BsCart className="text-xl  h-full " />
              <p className="">Cart</p>
            </Link>
          </div>
          <div className="w-full px-[0.5rem] py-3">
            {logedInUser && (
              <a
                href="/"
                onClick={handleSignOut}
                className="  w-full border rounded-md p-1 px-2 animate-blink-blue-pink text-sm hover:border-blue-500 hover:bg-blue-500 hover:text-white bg-black/90 text-white"
              >
                Log Out
              </a>
            )}
          </div>
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
