/* eslint-disable react-hooks/exhaustive-deps */
import { ref, listAll } from "firebase/storage";
import { useCallback, useEffect } from "react";
import { storage } from "../../../firebase-config";
//import getFile from "../functions/getFile";

const useGetFolder = async () => {
  // Create a reference to the file we want to download

  const folderRef = ref(storage, "men/");

  const handleFile = useCallback(() => {
    // Find all the prefixes and items.
    listAll(folderRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          console.log("folderRef", folderRef);
        });
        res.items.forEach((
          //itemRef
          ) => {
          // All the items under listRef.
        //  console.log("itemRef", itemRef);
          // Get the download URL
          //    const individualUrl = getFile(itemRef);
          // console.log("individualUrl", individualUrl);
        });
      })
      .catch((error) => {
        console.log("Uh-oh, an error occurred!");
        console.error(error);
      });
  }, []);

  useEffect(() => {
    handleFile();
  }, [folderRef]);

  return;
};

export default useGetFolder;
