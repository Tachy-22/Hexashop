import {  useSelector } from "react-redux";
import SignIn from "./SignIn";


const Modal = () => {
  const { content } = useSelector((state) => state.app);
 

  return (
    <div className="absolute w-screen h-screen backdrop-blur-sm flex justify-center items-center z-40 backdrop-brightness-[20%]">
      {content === "signIn" && <SignIn />}
    </div>
  );
};

export default Modal;
