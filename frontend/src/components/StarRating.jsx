/* eslint-disable react/prop-types */
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const renderStars = (starNumber) => {
  const filledStars = Math.min(starNumber, 5); // Ensure a maximum of 5 filled stars
  const emptyStars = 5 - filledStars;
  const starsArray = [];

  for (let i = 0; i < filledStars; i++) {
    starsArray.push(<AiFillStar key={i} className="text-yellow-500 text-sm xl:text-md" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    starsArray.push(
      <AiOutlineStar
        key={filledStars + i}
        className="text-yellow-500 text-sm xl:text-md"
      />
    );
  }

  return starsArray;
};

const StarRating = ({ starNumber }) => {
  return (
    <div className=" flex justify-centeritems-center">
      {" "}
      <span className="flex justify-between w-fit items-center">{renderStars(starNumber)}</span>
    </div>
  );
};

export default StarRating;
