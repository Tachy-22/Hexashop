/* eslint-disable react/prop-types */
import BackNav from "./BackNav";
import Breadcrumbs from "./BreadCrumbs";
import CategoryNav from "./CategoryNav";
import PageTitle from "./PageTitle";

const CategoryHeader = ({ categoryNavData }) => {
  return (
    <div>
      {" "}
      <div className=" flex gap-2" id="bread-crumbs">
        <BackNav>Back</BackNav>
        <Breadcrumbs />
      </div>
      <div className="" id="section-Title">
        <PageTitle />
        <span className="" id="item-number"></span>
        <div className=" md:w-[50%] pt-[0.5rem] text-md text-gray-500 font-thin">
          {categoryNavData.description}
        </div>
      </div>
      <nav className=" w-full flex" id="page-nav">
        <CategoryNav categoryNavData={categoryNavData.data} />
      </nav>
    </div>
  );
};

export default CategoryHeader;
