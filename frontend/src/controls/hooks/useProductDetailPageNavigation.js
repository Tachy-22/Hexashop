import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setProductInView } from "../../react-redux/appSlice";

const useProductDetailPageNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToProductDetailPage = (product, imageUrl, categoryData) => {
    categoryData
      ? dispatch(
          setProductInView({
            product,
            imageUrl,
            categoryData,
          })
        )
      : dispatch(setProductInView({ product, imageUrl }));
    navigate(`/product/${product.label}`);
  };

  return navigateToProductDetailPage;
};

export default useProductDetailPageNavigation;
