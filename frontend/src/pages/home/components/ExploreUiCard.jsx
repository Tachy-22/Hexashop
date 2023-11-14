/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ExploreUiCard = ({ ExploreUiData }) => {
  return (
    <div
      style={{ "--image-url": `url(${ExploreUiData.image})` }}
      className="bg-[image:var(--image-url)]  rounded bg-cover h-[18rem] md:h-[20rem] lg:h-[25rem]  flex justify-center items-center text-white bg-no-repeat bg-center duration-[3s] hover:bg-right-bottom   transition-all  "
    >
      <div className="flex backdrop-brightness-[70%] flex-col lg:gap-4 gap-2 justify-center items-center  h-[18rem] md:h-[20rem] lg:h-[25rem] w-full ">
        <Link
          to="/"
          className="text-xl font-bold hover:border p-2 rounded-md border-gray-400 text-center"
        >
          {ExploreUiData.title}
          <p className="text-md font-thin"> {ExploreUiData.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default ExploreUiCard;
