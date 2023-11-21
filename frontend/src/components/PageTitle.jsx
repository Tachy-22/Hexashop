import { useLocation } from "react-router-dom";

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
export default PageTitle;
