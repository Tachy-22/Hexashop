import { collection, getDocs, query, where } from "firebase/firestore";
import { useCallback, useMemo } from "react";
import { db } from "../../../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { setMyCart } from "../../react-redux/appSlice";

const useGetCart = () => {
  const dispatch = useDispatch();
  const { logedInUser } = useSelector((state) => state.app);

  // logedInUser && //console.log("logedInUser", logedInUser);

  const q = useMemo(
    () =>
      logedInUser &&
      query(
        collection(db, "carts"),
        where("cartOwner", "==", logedInUser?.email)
      ),
    [logedInUser]
  );

  const getMyCart = useCallback(async () => {
    try {
      //console.log("query");
      const querySnapshot = logedInUser && (await getDocs(q));
      const documentsArray = [];

      querySnapshot.forEach((doc) => {
        documentsArray.push({ id: doc.id, data: doc.data() });
      });

      querySnapshot
        ? dispatch(setMyCart(documentsArray))
        : dispatch(setMyCart(null));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, logedInUser, q]);

  return [getMyCart];
};

export default useGetCart;
