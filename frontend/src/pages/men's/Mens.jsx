import { Outlet } from "react-router-dom";
import CategoryHeader from "../../components/CategoryHeader";
import { menNavCategoryData } from "../../localDb/categoryNavigation";

const Mens = () => {
  return (
    <div className=" flex xl:px-[8%] md:px-[1rem] p-1 py-[2rem] flex-col gap-4 w-full ">
      <CategoryHeader categoryNavData={menNavCategoryData} />
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
