/* eslint-disable react/prop-types */


const Modal = ({ children }) => {
  return (
    <div className="absolute w-screen h-screen backdrop-blur-sm flex justify-center items-center z-40 backdrop-brightness-[20%]">
      {children}
    </div>
  );
};

export default Modal;
