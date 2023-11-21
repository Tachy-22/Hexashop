import { useSelector } from "react-redux";
import StarRating from "./StarRating";
import Button from "./Button";
import { roundTo99 } from "../controls/functions/roundTo99";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useAddToCart from "../controls/hooks/useAddToCart";
import { useNavigate } from "react-router-dom";
import { cartPath } from "../routing/paths";
import isItemInCart from "../controls/functions/isItemInCart";
import SimilarProducts from "./SimilarProducts";
import useGetCart from "../controls/hooks/useGetCart";
import { BsArrowBarRight } from "react-icons/bs";
import getContrastColor from "../controls/functions/getContrastColor";

const ProductDetails = () => {
  const navigate = useNavigate();

  const { productInView, logedInUser, myCart } = useSelector(
    (state) => state.app
  );
  const product = useMemo(() => productInView.product, [productInView.product]);
  const imageUrl = useMemo(
    () => productInView.imageUrl,
    [productInView.imageUrl]
  );
  const [isInCart, setIsInCart] = useState(product.isInCart);
  const [addToCart] = useAddToCart();
  const [getMyCart] = useGetCart();

  useEffect(() => {
    getMyCart();
  }, [getMyCart]);

  const handleProductToCartAddition = useCallback(() => {
    logedInUser && addToCart({ ...product, imageUrl });
    navigate(cartPath);
  }, [addToCart, imageUrl, logedInUser, navigate, product]);
  //console.log(productInView);

  useEffect(() => {
    isItemInCart(myCart, product) ? setIsInCart(true) : setIsInCart(false);
  }, [myCart, product]);

  const [localImageUrl, setLocalImageUrl] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("rgb(0,0,0)");

  const imageRef = useRef(null);

  //console.log("imageRef", imageRef);

  const img = useRef(new Image());
  img.current.src = useMemo(() => localImageUrl, [localImageUrl]);

  useEffect(() => {
    async function convertToBlobAndLocalUrl() {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const localUrl = URL.createObjectURL(blob);
        setLocalImageUrl(localUrl);
        //console.log("Just set the local url", localUrl);
      } catch (error) {
        console.error("Error converting image:", error);
      }
    }

    convertToBlobAndLocalUrl(); // Invoking the async function
  }, [imageUrl]);

  const getPixelColorAtPosition = useCallback(
    (element, x, y) => {
      const canvas = document.createElement("canvas");
      canvas.width = element.clientWidth;
      canvas.height = element.clientHeight;
      const context = canvas.getContext("2d");

      const img = new Image();
      img.src = localImageUrl; // Replace this with your image URL

      img.onload = () => {
        context.drawImage(img, 0, 0, element.clientWidth, element.clientHeight);
        const pixel = context.getImageData(x, y, 1, 1).data;
        const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
        setBackgroundColor(color);
      };
    },
    [localImageUrl]
  );

  const handleColorExtraction = useCallback(
    (event) => {
      const div = imageRef.current;

      const rect = div.getBoundingClientRect();
      //console.log("rect :", rect);
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const pixel = getPixelColorAtPosition(div, x, y);
      setBackgroundColor(pixel);
    },
    [getPixelColorAtPosition]
  );
  console.log("backgroundColor", backgroundColor);

  const contrastColor = getContrastColor(backgroundColor);

  return (
    <div
      style={{ "--bg-color": `${backgroundColor}` }}
      className={` ${
        typeof productInView.categoryData === "undefined" ? "h-full" : "h-max"
      }  flex flex-col justify-center pt-[3rem] items-center w-full bg-center bg-gray-300  bg-gradient-to-l from-gray-300 bg-[var(--bg-color)] to-[75%]     duration-[1s]  transition-all "`}
    >
      <div className="md:px-[10%] xl:px-[20%] pb-[2rem] items-start w-full flex  border-green-400  h-[75vh]">
        {" "}
        <div
          className={`" flex flex-col h-full  w-full border-t p-6 justify-between items-center     shadow-2xl drop-shadow-2xl from-black/20  rounded-md gap-[2rem] h-full"`}
        >
          <picture
            onMouseEnter={handleColorExtraction}
            // onMouseLeave={handleColorExtraction}
            // onMouseOver={handleColorExtraction}
            onClick={handleColorExtraction}
            ref={imageRef}
            style={{
              "--image-url": `url(${localImageUrl})`,
            }}
            className={` bg-[image:var(--image-url)] flex-grow cursor-pointer  rounded-m bg-cover xl:w-[30rem] md:w-[20rem]  tansition-all duration-[3s]  xl:h-[45rem] md:h-[25rem] h-[20rem] w-full  flex justify-start items-start bg-no-repeat  bg-center rounded-md transition-all  border-red-400   `}
          ></picture>

          <div className="flex h-fit   w-full  border-red-500  ">
            <div className="flex-col   flex w-full gap-[1rem] h-fit items-center justify-center">
              <h2
                style={{
                  color: contrastColor,
                }}
                className=" flex   w-fit  border-green-400 md:text-3xl font-bold duration-[1s] transition-all uppercase text-center "
              >
                {product.label}
              </h2>
              <div
                style={{
                  color: contrastColor,
                }}
                className=" flex  w-fit duration-[1s] transition-all justify-between gap-[2rem]"
              >
                <p className="duration-[1s]  transition-all font-bold w-fit">
                  USD {roundTo99(product.price)}
                </p>
                <StarRating starNumber={product.stars} />
              </div>
              <div className=" flex justify-center gap-4">
                <Button
                  size="medium"
                  color="primary"
                  type="solid"
                  style="w-fit h-fit flex justify-between items-center gap-2"
                  onClick={handleProductToCartAddition}
                >
                  {isInCart ? "See in Cart" : "Add to Cart"}{" "}
                  <BsArrowBarRight className="md:text-lg" />
                </Button>
                <Button
                  size="medium"
                  type="outline"
                  style="w-fit h-fit flex justify-between items-center gap-2 text-white border-white bg-gray-400"
                >
                  View full details <BsArrowBarRight className="md:text-lg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts
        categoryData={productInView.categoryData}
        contrastColor={contrastColor}
      />
    </div>
  );
};

export default ProductDetails;
