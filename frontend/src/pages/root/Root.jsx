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

const Root = () => {
  useRefreshData();
  //const { root } = useLoaderData();
  const { isVisible } = useSelector((state) => state.app);
  const outletRef = useRef();
  useScrollToTopOnNavigation(outletRef);
  console.log("outletRef", outletRef);
  return (
    <div className="bg-primary  w-full text-black  border-black carousel">
      {isVisible && <Modal />}
      {<InternetConnectionStatus />}
      <Nav />
      {/* {root} */}
      <div
        ref={outletRef}
        className="h-screen overflow-y-auto carousel  flex flex-col w-full -4  border-red-500"
      >
        <Outlet />
        <Footer />
      </div>{" "}
    </div>
  );
};

export default Root;
