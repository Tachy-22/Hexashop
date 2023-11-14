import Footer from "../../components/Footer";
import ExploreUi from "./components/ExploreUi";
import FastSellingProducts from "./components/FastSellingProducts ";
import Hero from "./components/Hero";
import LatestUi from "./components/LatestUi";
import NewsAndUpdates from "./components/NewsAndUpdates";
import Popular from "./components/Popular";
import Promo from "./components/Promo";

const Home = () => {
  return (
    <div className="bg-primary h-max flex flex-col  flex-grow  border-red-500  w-full">
      <Hero />
      <LatestUi />
      <ExploreUi />
      <Popular />
      <Promo />
      <FastSellingProducts/>
      <NewsAndUpdates />
      <Footer />
    </div>
  );
};

export default Home;
