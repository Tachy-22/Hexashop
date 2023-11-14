import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const pupularUiData = [
  { header: "Samba", path: "/" },
  { header: "campus", path: "/" },
  { header: "gazzele", path: "/" },
  { header: "messi", path: "/" },
  { header: "ultraboost", path: "/" },
  { header: "nmd", path: "/" },
];

const PopularListItem = ({ item }) => {
  return (
    <>
      <div className=" hover:border-black bor hover:border-b-[0.5rem] my-3 max-h-[3rem]  border-black pb-[2rem] border-b-[0.1rem] font-extrabold text-3xl">
        <a> {item.header}</a>
      </div>
    </>
  );
};

const Popular = () => {
  return (
    <div className="xl:p-[6rem] md:p-[4rem] p-4">
      <h2 className="my-4 text-3xl font-bold"> Popular right now</h2>
      <div className="lg:grid-cols-3 gap-[5rem] grid-cols-1 grid ">
        {pupularUiData.map((item, i) => {
          return (
            <Link to={`${item.path}`} key={i}>
              {" "}
              <PopularListItem item={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
