import { deleteDoc, doc } from "firebase/firestore";
import { useCallback,  } from "react";
import { db } from "../../../firebase-config";
import { useSelector } from "react-redux";
import useGetCart from "./useGetCart";

const useRemoveFromCart = () => {
  const { myCart } = useSelector((state) => state.app);
  const [getMyCart] = useGetCart();



  const removeFromCart = useCallback(
    async (cartItem) => {
      try {
        // Add a new document with a generated id.
        const doesObjectInDb = myCart.filter(
          (item) => item.data._key === cartItem._key
        );

        console.log(doesObjectInDb, doesObjectInDb[0].id);
        await deleteDoc(doc(db, "carts", `${doesObjectInDb[0].id}`));
         getMyCart();
        console.log("Document deleted  ");
      } catch (error) {
        console.error(error);
      }
    },
    [getMyCart, myCart]
  );

  return [removeFromCart];
};

export default useRemoveFromCart;
