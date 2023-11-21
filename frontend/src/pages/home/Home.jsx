import { useEffect } from "react";

import useAddUser from "../../controls/hooks/useAddUser";
import ExploreUi from "./components/ExploreUi";
import FastSellingProducts from "./components/FastSellingProducts ";
import Hero from "./components/Hero";
import LatestUi from "./components/LatestUi";
import NewsAndUpdates from "./components/NewsAndUpdates";
import Popular from "./components/Popular";
import Promo from "./components/Promo";
import { useSelector } from "react-redux";
import useGetCart from "../../controls/hooks/useGetCart";

const Home = () => {
  const { logedInUser } = useSelector((state) => state.app);
  const [getMyCart] = useGetCart();
  const [addUser] = useAddUser();
  useEffect(() => {
    console.log("adding User");
    logedInUser && addUser();
  }, [addUser, logedInUser]);

  useEffect(() => {
    getMyCart();
  }, [getMyCart]);

  return (
    <div className="bg-primary h-max flex flex-col  flex-grow  border-red-500  w-full">
      <Hero />
      <LatestUi />
      <ExploreUi />
      <Popular />
      <Promo />
      <FastSellingProducts />
      <NewsAndUpdates />
      
    </div>
  );
};

export default Home;
