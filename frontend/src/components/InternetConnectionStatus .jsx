import { useState } from "react";
import Button from "./Button";
import ModalB from "./ModalB";
import { useSelector } from "react-redux";
//import { Link } from "react-router-dom";

const InternetConnectionStatus = () => {
  const { isOnLine } = useSelector((state) => state.app);
  useSelector;
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(
    "You are offline. Check your internet connection.",
    isOnLine,
    navigator
  );

  return (
    <>
      <ModalB isModalOpen={!isOnLine} setIsModalOpen={setIsModalOpen}>
        <div action="" className="flex p-6 gap-4 justify-between">
          <p>You are offline. Check your internet connection.</p>
          <div type="submit" className="cursor-pointer">
            <Button
              size="small"
              color="primary"
              type="solid"
              style="w-fit h-fit flex justify-between items-center gap-2"
            >
              {/* <Link to="/" className="">
                {" "}
                Try again !
              </Link> */}
            </Button>
          </div>
        </div>
      </ModalB>
      <div className="pt-[5rem] px-4 text-sm p-1 ">
        {isOnLine && !isModalOpen ? (
          <p className="text-green-400"></p>
        ) : (
          <p className="text-red-400">
            You are offline. Check your internet connection.
          </p>
        )}
      </div>
    </>
  );
};

export default InternetConnectionStatus;
