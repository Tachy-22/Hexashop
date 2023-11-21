import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase-config";

const useGetUsers = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    try {
      console.log("gettingUsers");

      const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "cities"));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      };
      getUsers();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return [users, setUsers];
};

export default useGetUsers;
