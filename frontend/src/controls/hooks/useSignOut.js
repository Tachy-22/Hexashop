import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config";
import { initiateCurrentUser } from "../../react-redux/appSlice";
import { useDispatch } from "react-redux";
auth;

const useSignOut = () => {
  const [isSigningOut, setIsSigningOut] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      {
        const signingOut = () => {
          sessionStorage.removeItem("user");
          sessionStorage.removeItem("userAccessToken");
          dispatch(initiateCurrentUser(null));
          isSigningOut && console.log("Signing out");

          signOut(auth)
            .then(() => {
              console.error("Sign out successful");
            })
            .catch((error) => {
              console.error(
                "error occured while attempting to sign out:",
                error
              );
            });
          setIsSigningOut(false);
        };
        isSigningOut && signingOut();
      }
    } catch (error) {
      console.error("error occured while attempting to sign out:", error);
    }
  }, [dispatch, isSigningOut]);

  return [setIsSigningOut];
};

export default useSignOut;
