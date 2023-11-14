/* eslint-disable react/prop-types */
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { BsCart, BsFillCartCheckFill } from "react-icons/bs";
import { useState } from "react";

import StarRating from "./StarRating";
import useConvertToImageUrl from "../controls/hooks/useConvertToImageUrl";

const ProductCard = ({ product, style }) => {
  const [isFavorite, setIsFavorite] = useState(!product.isFavorite);
  const [isInCart, setIsInCart] = useState(!product.isInCart);

  const [imageUrl] = useConvertToImageUrl(product.url.asset._ref);

  console.log("imageUrl", imageUrl);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleCartClick = () => {
    setIsInCart(!isInCart);
  };

  return (
    <div className="flex flex-grow flex-col justify-center h-full  max-w-[25rem]">
      <div
        style={{
          "--image-url": `url(${imageUrl})`,
        }}
        className={`" bg-[image:var(--image-url)]  rounded-t bg-cover  xl:h-[20rem] h-[15rem] w-full  flex justify-center items-center text-white bg-no-repeat bg-top duration-[3s] hover:bg-left-bottom   transition-all  ${style} "`}
      ></div>
      <div className=" flex flex-col w-full p-4 flex-grow bg-secondary gap-4 h-max">
        <div className="flex justify-between h-min  border-red-500">
          <span className="font-semibold flex-grow capitalize w-max text-ellipsis  border-green-500 text-sm xl:text-xl">
            {product.label}
          </span>
          <StarRating starNumber={product.stars} />
        </div>
        <div className="flex w-full  justify-between items-center">
          <span className="text-sm xl:text-xl">{product.price}</span>
          <div className="flex gap-2">
            <span className="" onClick={handleFavoriteClick}>
              {isFavorite ? (
                <AiOutlineHeart className="text-sm xl:text-xl " />
              ) : (
                <AiFillHeart className="text-sm xl:text-xl text-red-500" />
              )}
            </span>
            <span className="" onClick={handleCartClick}>
              {isInCart ? (
                <BsCart className="text-sm xl:text-xl " />
              ) : (
                <BsFillCartCheckFill className="text-sm xl:text-xl text-green-500" />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
