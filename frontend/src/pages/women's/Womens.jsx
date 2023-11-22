import { Outlet } from "react-router-dom";
import CategoryHeader from "../../components/CategoryHeader";
import { womenNavCategoryData } from "../../localDb/categoryNavigation";

const Womens = () => {
  return (
    <div className=" flex md:px-[10%] px-[1rem] py-[2rem] flex-col gap-4 w-full border-4 border-green-400 h-full flex-grow ">
      <CategoryHeader categoryNavData={womenNavCategoryData} />
      <section
        className=" py-[1rem] border-red-500 mx-auto w-full h-max border-4"
        id="product-grid"
      >
        <Outlet />
      </section>
    </div>
  );
}

export default Womens