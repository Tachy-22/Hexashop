/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const CategoryNav = ({ categoryNavData }) => {
  return (
    <div className="flex text-gray-600 capitalize gap-[2rem]  border-b  h-full overflow-x-auto carousel border-gray-400 w-full py-[1.2rem] items-end overflow-clip ">
      {categoryNavData.map((categoryNav, index) => {
        return (
          <div key={index} className="w-full h-full">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "border border-purple-300"
                  : isActive
                  ? " capitalize border-b-4 py-4  p-4 border-black h-full"
                  : "text-black capitalize h-full py-4 p-4 hover:text-blue-700 "
              }
              to={categoryNav.path}
            >
              {categoryNav.type}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryNav;
