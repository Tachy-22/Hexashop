export const calculateTotalItemPrice = (myCart) => {
  let total = 0;
  myCart?.forEach((product) => {
    total += parseInt(product.data.total);
  });
  return total;
};
