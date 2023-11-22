/* eslint-disable react/prop-types */
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { BsCart, BsFillCartCheckFill } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";

import StarRating from "./StarRating";
import useConvertToImageUrl from "../controls/hooks/useConvertToImageUrl";
import useAddToCart from "../controls/hooks/useAddToCart";
import { useDispatch, useSelector } from "react-redux";

import { setModalContent, setModalVisibility } from "../react-redux/appSlice";
import useRemoveFromCart from "../controls/hooks/useRemoveFromCart";
import useProductDetailPageNavigation from "../controls/hooks/useProductDetailPageNavigation";
import { roundTo99 } from "../controls/functions/roundTo99";
import isItemInCart from "../controls/functions/isItemInCart";
import ModalB from "./ModalB";
import Button from "./Button";
import Loader from "./Loader";

const ProductCard = ({ product, style, categoryData }) => {
  const dispatch = useDispatch();
  const [removeFromCart] = useRemoveFromCart();
  const navigateToProductDetailPage = useProductDetailPageNavigation();
  const [imageUrl] = useConvertToImageUrl(product.url.asset._ref);
  const [addToCart] = useAddToCart();
  const [isFavorite, setIsFavorite] = useState(!product.isFavorite);
  const [isInCart, setIsInCart] = useState(product.isInCart);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { logedInUser, myCart } = useSelector((state) => state.app);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleSignInPopUp = useCallback(() => {
    dispatch(setModalVisibility(true));
    dispatch(setModalContent("signIn"));
  }, [dispatch]);

  const handleCartIconClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleProductCartAddition = useCallback(() => {
    product && logedInUser && addToCart({ ...product, imageUrl });
    logedInUser ? setIsInCart((prev) => !prev) : handleSignInPopUp();
    setIsModalOpen(false);
  }, [addToCart, handleSignInPopUp, imageUrl, logedInUser, product]);

  const handleRemoveCartItem = useCallback(() => {
    removeFromCart(product);
    setIsModalOpen(false);
  }, [product, removeFromCart]);

  useEffect(() => {
    setIsInCart(isItemInCart(myCart, product, setIsInCart));
  }, [myCart, product]);

  const handleProductDetailNavigation = useCallback(() => {
    navigateToProductDetailPage(product, imageUrl, categoryData);
  }, [categoryData, imageUrl, navigateToProductDetailPage, product]);

  return (
    <div
      className={`" flex flex-grow flex-col justify-center xl:h-[25rem] md:h-[20rem] sm:h-[18rem]  h-[15rem]   ${style} "`}
    >
      {imageUrl ? (
        <div
          onClick={handleProductDetailNavigation}
          style={{
            "--image-url": `url(${imageUrl})`,
          }}
          className={`" bg-[image:var(--image-url)]  rounded-t bg-cover h-full   w-full  flex justify-center items-center text-white bg-no-repeat  bg-center duration-[3s] hover:bg-left-bottom    hover:border-2 border-yellow-400 transition-all "`}
        ></div>
      ) : (
        <Loader />
      )}
      <div className=" flex flex-col w-full sm:p-4 p-2 flex-grow bg-secondary sm:gap-4 gap-1 h-max">
        <div className="flex 2xl:flex-row flex-col justify-between h-min relative  border-red-500 gap-2 ">
          <span
            onClick={handleProductDetailNavigation}
            className="font-semibold uppercase w-full hover:underline cursor-pointer  border-green-500 text-sm xl:text-[0.9rem] truncate"
          >
            {product.label}
          </span>
          <StarRating starNumber={product.stars} />
        </div>

        <div className="flex w-full  justify-between items-center">
          <span className="text-sm xl:text-xl">
            $ {roundTo99(product.price)}
          </span>
          <div className="flex gap-2">
            <span className="" onClick={handleFavoriteClick}>
              {isFavorite ? (
                <AiOutlineHeart className="text-sm xl:text-xl " />
              ) : (
                <AiFillHeart className="text-sm xl:text-xl text-red-500" />
              )}
            </span>
            <span className="" onClick={handleCartIconClick}>
              {!isInCart ? (
                <>
                  {" "}
                  <BsCart
                    // onClick={handleProductCartAddition}
                    className="text-sm xl:text-xl "
                  />{" "}
                </>
              ) : (
                <BsFillCartCheckFill className="text-sm xl:text-xl text-green-500" />
              )}
            </span>
            <ModalB isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
              <div action="" className="flex p-6 gap-4 justify-between">
                <h2>{!isInCart ? "Add to cart ?" : "Remove from Cart"}</h2>

                <div
                  type="submit"
                  className="cursor-pointer"
                  onClick={
                    !isInCart ? handleProductCartAddition : handleRemoveCartItem
                  }
                >
                  <Button
                    size="small"
                    color="primary"
                    type="solid"
                    style="w-fit h-fit flex justify-between items-center gap-2"
                  >
                    Yes
                  </Button>
                </div>
              </div>
            </ModalB>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
