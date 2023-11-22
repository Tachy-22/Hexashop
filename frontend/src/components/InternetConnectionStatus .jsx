
import { useSelector } from "react-redux";


const InternetConnectionStatus = () => {
  const { isOnLine } = useSelector((state) => state.app);
 

  console.log(
    "You are offline. Check your internet connection.",
    isOnLine,
    navigator
  );

  return (
    <>
      {!isOnLine && (
        <p className="text-red-400">
          You are offline. Check your internet connection.
        </p>
      )}
    </>
  );
};

export default InternetConnectionStatus;
