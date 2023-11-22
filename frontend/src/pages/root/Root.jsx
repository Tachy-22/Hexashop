import {
  Outlet,
  //  useLoaderData
} from "react-router-dom";
import Nav from "../../components/Nav";
import Modal from "../../components/Modal";
import { useSelector } from "react-redux";
import useRefreshData from "../../controls/hooks/useRefreshData";
import Footer from "../../components/Footer";
import useScrollToTopOnNavigation from "../../controls/hooks/useScrollToTopOnNavigation ";
import { useRef } from "react";
import InternetConnectionStatus from "../../components/InternetConnectionStatus ";
import SignIn from "../../components/SignIn";

const Root = () => {
  useRefreshData();

  const { isVisible } = useSelector((state) => state.app);
  const outletRef = useRef();
  useScrollToTopOnNavigation(outletRef);

  return (
    <div className="bg-primary h-screen overflow-y-auto  w-full text-black carousel border-black ">
      {isVisible && (
        <Modal>
          <SignIn />
        </Modal>
      )}
      {<InternetConnectionStatus />}
      <Nav />
      {/* {root} */}
      <div
        ref={outletRef}
        className=" min-h-[90vh]    flex flex-col w-full pt-[4rem]  border-red-500 bg-primary"
      >
        <Outlet />
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Root;
