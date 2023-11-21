import ExploreUiCard from "./ExploreUiCard";

import LoafersUiBgImg from "../../../assets/LoafersUiBgImg.jpg";
import LeatherBagUiBgImg from "../../../assets/LeatherBagUiBgImg.jpg";
import SweatShirtUiBgImg from "../../../assets/SweatShirtUiBgImg.jpg";
import watchUiBgImg from "../../../assets/watchUiBgImg.jpg";

const ExploreUiData = [
  {
    title: "Leather Bags",
    description: "Refined luxury in hand.",
    image: LeatherBagUiBgImg,
  },
  {
    title: "Loafers",
    description: "Timeless comfort, stylish steps.",
    image: LoafersUiBgImg,
  },
  {
    title: "Sweatshirts",
    description: "Casual warmth, cool vibes.",
    image: SweatShirtUiBgImg,
  },
  {
    title: "Watches",
    description: "Elegance for every moment.",
    image: watchUiBgImg,
  },
];

const ExploreUi = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col gap-[3rem] h-fit heroDropShadow bg-white herodropShadpw py-[2rem] md:py-[6rem] xl:px-[5rem] l p-[1rem] ">
      <div className="flex flex-col h-fit justify-start items-start md:my-auto -green-400 gap-4">
        <h2 className="lg:text-4xl text-2xl font-bold">Explore Our Products</h2>
        <p className=" flex flex-col gap-2">
          <span className="">
            Embark on a style journey with HexaShop, where fashion meets
            function. Discover the power of self-expression through our curated
            collection of clothing and accessories. Whether you are a
            trendsetting yogi, a weekend hiker seeking urban escape, or a city
            slicker with an eye for refined luxury, HexaShop is your
            destination. Our 3-Stripes echo in every stitch, weaving through
            sports, music, and stages of life. From the starting line to the
            finish, we are here to support your unique style. Explore our range,
            from timeless loafers for stylish steps to casual warmth in our
            sweatshirts. Elevate your look with our elegant leather bags and
            find watches that embody sophistication for every moment.
          </span>
          <span className="">
            At HexaShop, we co-create with the best, offering sporting goods and
            fashion that align with your athletic needs, all while keeping
            sustainability in mind. Join us to support creators, improve your
            fashion game, and make an impact on the world.
          </span>
        </p>
      </div>
      <div className=" grid sm:grid-cols-2 sm:grid-rows-2 gap-4  lg:my-auto -red-400 h-fit md:p-0  px-0">
        {ExploreUiData.map((item, id) => {
          return <ExploreUiCard key={id} ExploreUiData={item} />;
        })}
      </div>
    </div>
  );
};

export default ExploreUi;
