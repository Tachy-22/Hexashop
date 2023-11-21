export const totalPayablePrice = (
  calculateTotalItemPrice,
  shippingCharge,
  salesCharge,
  myCart
) => {
  return calculateTotalItemPrice(myCart) + shippingCharge + salesCharge;
};
