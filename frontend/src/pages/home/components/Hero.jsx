import WomenUiBgImg from "../../../assets/womenUiBgImg.jpg";
import MenUiBgImg from "../../../assets/MenUiBgImg.jpg";
import kidsUiBgImg from "../../../assets/kidsUiBgImg.jpg";
import accesoriesUiBgImg from "../../../assets/accesoriesUiBgImg.jpg";
import signUpUiBgImg from "../../../assets/signUpUiBgImg.jpg";
import HeroCardA from "./HeroCardA";
import HeroCardB from "./HeroCardB";

const categoryUiData = [
  {
    cardUiName: "women",
    cardDescriptionText: "Chic Styles Await",
    cardDescriptionPrompt: "Discover more",
    path: "/women's",
    uiBgImg: WomenUiBgImg,
  },
  {
    cardUiName: "men",
    cardDescriptionText: "Elevate Your Wardrobe",
    cardDescriptionPrompt: "Discover more",
    path: "/men's",
    uiBgImg: MenUiBgImg,
  },
  {
    cardUiName: "kids",
    cardDescriptionText: "Adorable Kids Fashion",
    cardDescriptionPrompt: "Discover more",
    path: "/kid's",
    uiBgImg: kidsUiBgImg,
  },
  {
    cardUiName: "accesories",
    cardDescriptionText: "Complete Your Look",
    cardDescriptionPrompt: "Discover more",
    path: "/accesories",
    uiBgImg: accesoriesUiBgImg,
  },
];


const Hero = () => {
  return (
    <div className=" drop-shadow-[-5px_22px_-7px_rgba(89,85,85,0.75)] xl:px-[6rem] md:px-[2rem] px-1 xl:py-[3rem] md:py-[1rem] py-1 md:gap-[1rem] gap-2 bg-white grid lg:grid-cols-2 lg:grid-rows-1  grid-rows-2 grid-cols-1 h-fit  border-red-500">
      <HeroCardA image={signUpUiBgImg} />
      <div className="grid grid-cols-2 grid-rows-2  md:gap-[1rem] gap-2 ">
        {categoryUiData.map((category, index) => {
          return <HeroCardB category={category} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Hero;
