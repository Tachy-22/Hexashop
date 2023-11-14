import { useEffect } from "react";
import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "../../../firebase-config";
import { useDispatch } from "react-redux";
import {
  initiateCurrentUser,
  setModalVisibility,
} from "../../react-redux/appSlice";
import { useNavigate } from "react-router-dom";

const useSignInWithGoogle = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      console.log("tried !");
      isLoggingIn &&
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            console.log("trying to log in");
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);

            const token = credential.accessToken;
            // The signed-in user info.
            const logedInUser = result.user.providerData[0];
            // IdP data available using getAdditionalUserInfo(result)
            // ...

            console.log("userand user Token :", logedInUser, token);
            sessionStorage.setItem("user", JSON.stringify(logedInUser));
            sessionStorage.setItem("userAccessToken", result.user.accessToken);
            dispatch(initiateCurrentUser(logedInUser));
            dispatch(setModalVisibility(false));
            setIsLoggingIn(false);
            navigate("/");
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
  }, [dispatch, isLoggingIn, navigate]);

  return [isLoggingIn, setIsLoggingIn];
};

export default useSignInWithGoogle;
