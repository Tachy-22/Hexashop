import { Outlet, useLocation } from "react-router-dom";

import Breadcrumbs from "../../components/BreadCrumbs";
import CategoryNav from "../../components/CategoryNav";
import BackNav from "../../components/BackNav";


const menNavCategoryData = [
  {
    path: "/men's/",
    type: "all",
  },
  {
    path: "/men's/shirts",
    type: "shirts",
  },
  {
    path: "/men's/trousers",
    type: "trousers",
  },
  {
    path: "/men's/jackets",
    type: "jackets",
  },
  {
    path: "/men's/jeans",
    type: "jeans",
  },
  {
    path: "/men's/sweaters",
    type: "sweaters",
  },
  {
    path: "/men's/shoes",
    type: "shoes",
  },
  // Add more objects as needed
];

const PageTitle = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const pageTitle = pathnames
    .map((path) => path.charAt(0).toUpperCase() + path.slice(1))
    .join("-");

  return (
    <h1 className="text-4xl tracking-widest  font-bold mt-2  italic  font-serif ">
      {pageTitle}
    </h1>
  );
};

const Mens = () => {


  return (
    <div className=" flex px-[10%] py-[2rem] flex-col gap-4 w-full ">
      <div className=" flex gap-2" id="bread-crumbs">
        <BackNav />
        <Breadcrumbs />
      </div>
      <div className="" id="section-Title">
        <PageTitle />
        <span className="" id="item-number"></span>
        <div className=" w-[50%] pt-[0.5rem] text-md text-gray-500 font-thin">
          From insulated boots made for the cold to lightweight trail runners
          designed to move fast in the mountains, mens hiking shoes help you
          find your footing.
        </div>
      </div>
      <nav className=" w-full flex" id="page-nav">
        <CategoryNav categoryNavData={menNavCategoryData} />
      </nav>
      <section
        className=" py-[1rem] border-red-500 mx-auto w-full"
        id="product-grid"
      >
        <Outlet />
      </section>
    </div>
  );
};

export default Mens;
