import { useDispatch, useSelector } from "react-redux";
import { setMyCart } from "../../../../react-redux/appSlice";

const useCartQuantityUpdater = () => {
  const dispatch = useDispatch();
  const { myCart } = useSelector((state) => state.app);

  const updateQuantityAndTotal = (index, newQty) => {
    const updatedProducts = [...myCart];
    const updatedProduct = {
      ...updatedProducts[index],
      data: {
        ...updatedProducts[index].data,
        qty: newQty,
        total: newQty * parseInt(updatedProducts[index].data.price),
      },
    };

    updatedProducts[index] = updatedProduct;
    dispatch(setMyCart(updatedProducts));
  };

  return updateQuantityAndTotal;
};

export default useCartQuantityUpdater;
