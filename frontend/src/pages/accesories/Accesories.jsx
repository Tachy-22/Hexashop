import { Outlet } from "react-router-dom";
import CategoryHeader from "../../components/CategoryHeader";
import { accessoriesNavCategoryData } from "../../localDb/categoryNavigation";

const Accesories = () => {
  return (
    <div className=" flex md:px-[10%] px-[1rem] py-[2rem] flex-col gap-4 w-full  border-green-400 h-full flex-grow ">
      <CategoryHeader categoryNavData={accessoriesNavCategoryData} />
      <section
        className=" py-[1rem] border-red-500 mx-auto w-full h-max "
        id="product-grid"
      >
        <Outlet />
      </section>
    </div>
  );
};

export default Accesories;
