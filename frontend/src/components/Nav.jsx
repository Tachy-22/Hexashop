import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { GrMenu } from "react-icons/gr";
import NavMobile from "./NavMobile";
import { useCallback, useState } from "react";

import { BsCart } from "react-icons/bs";

import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { setModalContent, setModalVisibility } from "../react-redux/appSlice";
import useSignOut from "../controls/hooks/useSignOut";

const Nav = () => {
  const navKeys = [
    { keyName: "home", path: "/" },
    { keyName: "men's", path: "/men's/" },
    { keyName: "women's", path: "/women's" },
    { keyName: "kid's", path: "/kid's" },
    { keyName: "accesories", path: "/accesories" },
    { keyName: "about us", path: "/about us" },
    { keyName: "contact us", path: "/contact us" },
  ];

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
    <div className=" flex w-full justify-between items-center bg-secondary py-2 md:px-[4rem] px-2">
      <div className="" id="logo">
        <img src={Logo} alt="" className="" />
      </div>
      <div
        className="xl:flex gap-6  justify-between items-center hidden"
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
                    ? " capitalize  py-4 bg-gradient-to-b rounded from-gray-400/40 from-10% via-purple-00 via-40% to-secondary to-90% p-4 "
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
          <Link
            to="/"
            onClick={handleSignOut}
            className="border-0 border-gray-500 rounded-md p-1 px-2 animate-blink-blue-pink text-sm hover:border-blue-500 hover:bg-blue-500 hover:text-white bg-black/90 text-white"
          >
            Log Out
          </Link>
        )}
      </div>
      <div
        className="xl:hidden flex hover:border border-gray-400"
        onClick={handleShowMobileNav}
      >
        <GrMenu className="text-2xl" />
      </div>
      <NavMobile
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        navKeys={navKeys}
      />
    </div>
  );
};

export default Nav;
