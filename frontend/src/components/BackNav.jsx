import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const BackNav = () => {
  const navigate = useNavigate();
  const handleReturnNavigation = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div
      className="font-semibold flex justify-center gap-1 items-center cursor-pointer"
      onClick={handleReturnNavigation}
    >
      <TiArrowBack />
      Back
    </div>
  );
};

export default BackNav;
