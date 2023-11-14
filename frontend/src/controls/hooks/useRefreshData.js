import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initiateCurrentUser } from "../../react-redux/appSlice";
import { user } from "../../../sessionalStorage-config";

const useRefreshData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(initiateCurrentUser(user));
    } catch (error) {
      console.log("An error occured during app refresh : ", error);
    }
  }, [dispatch]);

  return;
};

export default useRefreshData;
