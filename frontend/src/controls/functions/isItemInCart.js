const isItemInCart = (myCart, product) => {
  // Function to check if an object with the same _key exists in the array
  const doesObjectExist =
    myCart && myCart.some((item) => item.data._key === product._key);

  if (doesObjectExist) {
    console.log("The object is in my cart.");

    return true;
  } else {
    console.log("The object is not in my Cart");
    return false;
  }
};

export default isItemInCart;
