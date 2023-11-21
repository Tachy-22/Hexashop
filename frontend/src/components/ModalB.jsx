/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const ModalB = ({ children, isModalOpen, setIsModalOpen }) => {
  const dialogRef = useRef(null);

  const handleOpen = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const handleClose = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.close();
      setIsModalOpen(false);
    }
  }, [setIsModalOpen]);

  useEffect(() => {
    isModalOpen ? handleOpen() : handleClose();
  }, [handleClose, isModalOpen]);

  const handleOutsideClock = (e) => {
    const dialogDimensions = dialogRef.current.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialogRef.current.close();
      setIsModalOpen(false);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal-dialog "
      onClick={handleOutsideClock}
    >
      <div className="modal-content ">
        <button
          onClick={handleClose}
          className="close-btn p-2 absolute right-0 top-0 text-red-400"
        >
         <RiCloseCircleLine/>
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default ModalB;
