import { NavLink } from "react-router-dom";
import Logo from "../../../assets/image 1(2).png";
import { GrMenu } from "react-icons/gr";
import NavMobile from "./NavMobile";
import { useCallback, useState } from "react";

const Nav = () => {
  const navKeys = [
    { keyName: "home", path: "/" },
    { keyName: "men's", path: "/men's" },
    { keyName: "women's", path: "/women's" },
    { keyName: "kid's", path: "/kid's" },
    { keyName: "accesories", path: "/accesories" },
    { keyName: "about us", path: "/about us" },
    { keyName: "contact us", path: "/contact us" },
  ];

  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleShowMobileNav = useCallback(() => {
    setShowMobileNav(() => true);
  }, []);

  return (
    <div className=" flex w-full justify-between items-center bg-secondary py-2 md:px-[4rem] px-2">
      <div className="" id="logo">
        <img src={Logo} alt="" className="" />
      </div>
      <div className="xl:flex gap-6  hidden" id="navigation">
        {navKeys.map((keys, index) => {
          return (
            <div key={index} className=" h-full">
              <NavLink
                to={`${keys.path}`}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "border border-purple-300"
                    : isActive
                    ? " capitalize border-b-4 py-4 bg-gradient-to-b rounded from-gray-400 from-10% via-purple-00 via-40% to-secondary to-90% p-4 border-white"
                    : "text-black capitalize h-full py-4 p-4 hover:text-blue-700 hover:underline"
                }
              >
                {keys.keyName}
              </NavLink>
            </div>
          );
        })}
      </div>
      <div className="xl:hidden flex hover:border border-gray-400" onClick={handleShowMobileNav}>
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
