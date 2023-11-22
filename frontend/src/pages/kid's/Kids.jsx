import { Outlet } from "react-router-dom";
import CategoryHeader from "../../components/CategoryHeader";
import { kidsNavCategoryData } from "../../localDb/categoryNavigation";



const Kids = () => {
  return (
    <div className=" flex md:px-[10%] px-[1rem] py-[2rem] flex-col gap-4 w-full  h-full flex-grow ">
      <CategoryHeader categoryNavData={kidsNavCategoryData} />
      <section
        className=" py-[1rem] border-red-500 mx-auto w-full"
        id="product-grid"
      >
        <Outlet />
      </section>
    </div>
  );
}

export default Kids