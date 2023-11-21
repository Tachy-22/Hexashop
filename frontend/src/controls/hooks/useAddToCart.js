import { addDoc, collection } from "firebase/firestore";
import { useCallback } from "react";
import { db } from "../../../firebase-config";
import { useSelector } from "react-redux";
import useGetCart from "./useGetCart";

const useAddToCart = () => {
  const { logedInUser, myCart } = useSelector((state) => state.app);
 const [getMyCart] = useGetCart();

 
  //const cartItemDud = useMemo(() => ({ name: "Tokyo", country: "Japan" }), []);
  const collectionRef = collection(db, "carts");

  const addToCart = useCallback(
    async (cartItem) => {
      try {
        // Add a new document with a generated id.
        console.log("Current Cart Items", myCart, "my new Item is", cartItem);

        // Function to check if an object with the same _key exists in the array
        const doesObjectExist = myCart.some(
          (item) => item.data._key === cartItem._key
        );

        if (doesObjectExist) {
          console.log("The object with the same _key exists in the array.");
          return;
        } else {
          console.log(
            "The object with the same _key does not exist in the array."
          );
          const docRef =
            myCart &&
            (await addDoc(collectionRef, {
              ...cartItem,
              cartOwner: logedInUser?.email,
              qty: 1,
              total: cartItem.price,
            }));
          console.log("Document written with ID: ", docRef.id);
          getMyCart();
        }
      } catch (error) {
        console.error(error);
      }
    },
    [collectionRef, getMyCart, logedInUser?.email, myCart]
  );

  return [addToCart];
};

export default useAddToCart;
