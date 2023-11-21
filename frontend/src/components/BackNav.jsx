/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const BackNav = ({ children }) => {
  const navigate = useNavigate();
  const handleReturnNavigation = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div
      className="font-semibold flex hover:underline underline-offset-4 hover:text-gray-600 justify-center gap-1 items-center cursor-pointer "
      onClick={handleReturnNavigation}
    >
      <TiArrowBack className="text-lg" />
      <p className="">{children}</p>
    </div>
  );
};

export default BackNav;
