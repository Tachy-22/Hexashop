import { doc, updateDoc } from "firebase/firestore";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { db } from "../../../firebase-config";

const useUpdateCartItem = () => {
  const { myCart } = useSelector((state) => state.app);
  const updateCartItem = useCallback(
    async (cartItem, newQty) => {
      try {
        // Add a new document with a generated id.
        const doesObjectInDb = myCart.filter(
          (item) => item.data._key === cartItem._key
        );

        console.log(doesObjectInDb, doesObjectInDb[0].id);
        await updateDoc(doc(db, "carts", `${doesObjectInDb[0].id}`), {
          qty: newQty,
          total: cartItem.price * newQty,
        });
        console.log("Document updated  ");
      } catch (error) {
        console.error(error);
      }
    },
    [myCart]
  );

  return [updateCartItem];
};

export default useUpdateCartItem;
