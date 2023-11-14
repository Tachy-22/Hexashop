import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "../../components/Nav";
import Modal from "../../components/Modal";
import { useSelector } from "react-redux";
import useRefreshData from "../../controls/hooks/useRefreshData";

const Root = () => {
  useRefreshData();
  const { root } = useLoaderData();
  const { isVisible } = useSelector((state) => state.app);

  return (
    <div className="bg-primary h-screen w-full text-black overflow-y-auto">
      {isVisible && <Modal />}
      <Nav />
      {root}
      <div className=" h- flex w-full  border-red-500">
        <Outlet />
      </div>{" "}
    </div>
  );
};

export default Root;
