import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { GrMenu } from "react-icons/gr";
import NavMobile from "./NavMobile";
import { useCallback, useMemo, useState } from "react";

import { BsCart } from "react-icons/bs";

import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { setModalContent, setModalVisibility } from "../react-redux/appSlice";
import useSignOut from "../controls/hooks/useSignOut";
import {
  aboutUsPath,
  accessoriesPath,
  contactUsPath,
  homePath,
  kidsPath,
  mensPath,
  womensPath,
} from "../routing/paths";
import { FaHome, FaChild } from "react-icons/fa";
import { MdPhoneCallback, MdInfoOutline } from "react-icons/md";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { GiBigDiamondRing } from "react-icons/gi";

const Nav = () => {
  const navKeys = useMemo(
    () => [
      { keyName: "home", path: homePath, icon: <FaHome className="text-lg" /> },
      {
        keyName: "men's",
        path: mensPath,
        icon: <AiOutlineMan className="text-xl" />,
      },
      {
        keyName: "women's",
        path: womensPath,
        icon: <AiOutlineWoman className="text-xl" />,
      },
      {
        keyName: "kid's",
        path: kidsPath,
        icon: <FaChild className="text-xl" />,
      },
      {
        keyName: "accesories",
        path: accessoriesPath,
        icon: <GiBigDiamondRing className="text-xl" />,
      },
      {
        keyName: "about us",
        path: aboutUsPath,
        icon: <MdInfoOutline className="text-xl" />,
      },
      {
        keyName: "contact us",
        path: contactUsPath,
        icon: <MdPhoneCallback className="text-xl" />,
      },
    ],
    []
  );

  const dispatch = useDispatch();
  const { logedInUser } = useSelector((state) => state.app);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleShowMobileNav = useCallback(() => {
    setShowMobileNav(() => true);
  }, []);

  const handleSignInPopUp = useCallback(() => {
    dispatch(setModalVisibility(true));
    dispatch(setModalContent("signIn"));
  }, [dispatch]);

  const [setIsSigningOut] = useSignOut();

  const handleSignOut = useCallback(() => {
    setIsSigningOut(true);
  }, [setIsSigningOut]);

  return (
    <div className="absolute top-0 z-10 left-0 flex w-full justify-between items-center bg- backdrop-blur-3xl bg-secondary/50 py-2 border-b xl:px-[2rem] sm:px-[1.5rem] px-2">
      <Link to="/" className="" id="logo">
        <img src={Logo} alt="" className="md:w-full w-[10rem]" />
      </Link>
      <div
        className="xl:flex xl:gap-6  justify-between items-center hidden"
        id="navigation"
      >
        {navKeys.map((keys, index) => {
          return (
            <div key={index} className=" h-full">
              <NavLink
                to={`${keys.path}`}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "border border-purple-300"
                    : isActive
                    ? " capitalize  py-4 bg-gradient-to-b rounded from-gray-400/30 from-10%  via-40% to-secondary/20 to-90% p-4 "
                    : "text-black capitalize h-full py-4 p-4 hover:text-blue-700 hover:underline"
                }
              >
                {keys.keyName}
              </NavLink>
            </div>
          );
        })}
        <Link to="/cart" className=" hover:scale-125 " title="cart">
          <BsCart className="text-xl  h-full " />
        </Link>

        {!logedInUser && (
          <Link
            onClick={handleSignInPopUp}
            to="/"
            className="border-0 border-gray-500 rounded-md p-1 px-2 animate-blink-blue-pink hover:border-blue-500 hover:bg-blue-500 hover:text-white bg-black/90 text-white"
          >
            Sign In
          </Link>
        )}

        {logedInUser && <Profile />}
        {logedInUser && (
          <a
            href="/"
            onClick={handleSignOut}
            className="border-0 border-gray-500 rounded-md p-1 px-2 animate-blink-blue-pink text-sm hover:border-blue-500 hover:bg-blue-500 hover:text-white bg-black/90 text-white"
          >
            Log Out
          </a>
        )}
      </div>
      <div className="xl:hidden flex gap-4 justify-between items-center">
        <Link to="/cart" className=" hover:scale-125 " title="cart">
          <BsCart className="text-xl  h-full " />
        </Link>
        {logedInUser && <Profile />}
        <GrMenu
          onClick={handleShowMobileNav}
          className="text-2xl  hover:border border-gray-400"
        />
        {!logedInUser && (
          <Link
            onClick={handleSignInPopUp}
            to="/"
            className="border-0 border-gray-500 rounded-md p-1 px-2 animate-blink-blue-pink hover:border-blue-500 hover:bg-blue-500 hover:text-white bg-black/90 text-white text-[0.7rem]"
          >
            Sign In
          </Link>
        )}
      </div>
      <NavMobile
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        navKeys={navKeys}
        handleSignOut={handleSignOut}
        logedInUser={logedInUser}
      />
    </div>
  );
};

export default Nav;
