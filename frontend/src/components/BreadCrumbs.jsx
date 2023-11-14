
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="text-gray-600">
      {pathnames.length > 0 && (
        <div>
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <span key={path}>
                <Link to={routeTo} className="hover:text-blue-500 capitalize underline underline-offset-4">
                  {path}
                </Link>
                {!isLast && " / "}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Breadcrumbs;
