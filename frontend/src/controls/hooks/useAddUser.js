import { addDoc, collection } from "firebase/firestore";
import { useCallback } from "react";
import { db } from "../../../firebase-config";
import { useSelector } from "react-redux";

const useAddUser = () => {
  const { logedInUser } = useSelector((state) => state.app);

  //user={ name: "Tokyo", country: "Japan", }
  const collectionRef = collection(db, "users");

  logedInUser && console.log("logedInUser", logedInUser);

  const addUser = useCallback(async () => {
    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collectionRef, logedInUser);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error(error);
    }
  }, [collectionRef, logedInUser]);

  return [addUser];
};

export default useAddUser;
