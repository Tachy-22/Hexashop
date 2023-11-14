import { useDispatch } from "react-redux";
import useSignInWithGoogle from "../controls/hooks/useSignInWithGoogle";
import { useCallback } from "react";
import { setModalVisibility } from "../react-redux/appSlice";
import Logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";

import { AiOutlineCloseSquare } from "react-icons/ai";

const SignIn = () => {
  const dispatch = useDispatch();

  const [isLoggingIn, setIsLoggingIn] = useSignInWithGoogle();

  const handleSignIn = useCallback(() => {
    setIsLoggingIn(true);

   
  }, [setIsLoggingIn]);
  console.log("isLoggedIn :", isLoggingIn);

  const handleCloseModal = useCallback(() => {
    dispatch(setModalVisibility(false));
  }, [dispatch]);

  return (
    !isLoggingIn && (
      <div className="w-[30rem] h-[38rem] relative rounded-md bg-white flex flex-col gap-4 items-center px-[4rem] py-[2rem]">
        <AiOutlineCloseSquare
          onClick={handleCloseModal}
          className="text-black/70 absolute right-0 top-0 m-4 text-2xl hover:border"
        />
        <div
          className=" w-full -2 border-red-400  p-[1.5rem] mb-4  flex justify-center "
          id="logo"
        >
          <img
            src={Logo}
            alt=""
            className="p-3 border-2 rounded-md shadow-xl scale-[120%]"
          />
        </div>
        <p className=" text-gray-800  pb-2">
          Where Style Meets Elegance in Every Thread.
        </p>
        <div
          onClick={handleSignIn}
          className=" border border-black/50 rounded-md px-3 py-2 w-full flex justify-center items-center gap-2 hover:text-white hover:bg-black hover:border-white transition-colors duration-1000"
        >
          <FcGoogle className="text-2xl " />
          <p className=""> Continue with Google</p>
        </div>
        <div className="flex justify-center items-center gap-2 py-2 w-full">
          <span className="w-full h-[1px] bg-black/50"></span>
          <span className="">or</span>
          <span className="w-full h-[1px] bg-black/50"></span>
        </div>
        <div className="flex w-full">
          <input
            type="email"
            className=" p-1 border-black/50 border w-full rounded-md"
            placeholder="Email"
          />
        </div>
        <div className="flex w-full">
          <input
            type="text"
            className=" p-1 border-black/50 border w-full rounded-md"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center w-full">
          <button className="p-3 text-md w-full text-white rounded-md bg-blue-600 hover:bg-black/70 transition-colors duration-1000">
            Continue
          </button>
        </div>
      </div>
    )
  );
};

export default SignIn;
