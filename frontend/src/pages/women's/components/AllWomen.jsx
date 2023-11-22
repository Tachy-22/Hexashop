import WomenDresses from "./WomenDresses";
import WomenShoes from "./WomenShoes";
import WomenSkirts from "./WomenSkirts";

const AllWomen = () => {
  return (
    <div className="flex flex-col">
      <WomenSkirts />
      <WomenDresses />
      <WomenShoes/>
    </div>
  );
};

export default AllWomen;
