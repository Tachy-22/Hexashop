import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "../home/components/Nav";

const Root = () => {
  const { root } = useLoaderData();
  return (
    <div className="bg-primary h-screen w-full text-black overflow-y-auto">
      <Nav />
      {root}
      <div className=" h-full flex w-full" >
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
