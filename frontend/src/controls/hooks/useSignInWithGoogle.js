import { useEffect } from "react";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../../firebase-config";
import { useDispatch } from "react-redux";
import {
  initiateCurrentUser,
  setModalVisibility,
} from "../../react-redux/appSlice";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../cookies-config";

const useSignInWithGoogle = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      !isAuth &&
        isLoggingIn &&
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            console.log("trying to log in");
            // This gives you a Google Access Token. You can use it to access the Google API.
            //  const credential = GoogleAuthProvider.credentialFromResult(result);

            // const token = credential.accessToken;

            const logedInUser = result.user.providerData[0];
            const stringifiedUser = JSON.stringify(logedInUser);

            dispatch(initiateCurrentUser(logedInUser));

            //  console.log("userand user Token :", logedInUser, token);

            cookies.set("auth-token", result.user.accessToken);
            cookies.set("user", stringifiedUser);
            cookies.set("userAccessToken", result.user.accessToken);

            sessionStorage.setItem("user", stringifiedUser);
            sessionStorage.setItem("userAccessToken", result.user.accessToken);

            dispatch(setModalVisibility(false));
            setIsLoggingIn(false);
            navigate("/");
            setIsAuth(true);
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = googleProvider.credentialFromError(error);
            // ...
            console.log(
              "errrorrrr: ",
              errorCode,
              errorMessage,
              email,
              credential
            );
          });
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, isAuth, isLoggingIn, navigate]);

  return [isLoggingIn, setIsLoggingIn];
};

export default useSignInWithGoogle;
