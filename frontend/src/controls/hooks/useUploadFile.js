import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { useEffect } from "react";
import { storage } from "../../../firebase-config";

const useUploadFile = (metadata, filePath, selectedFile) => {
  // Upload file and metadata to the object 'images/mountains.jpg'

  useEffect(() => {
    try {
      const storageRef = ref(storage, filePath);
      const uploadTask =
        selectedFile &&
        uploadBytesResumable(storageRef, selectedFile, metadata);
      // Listen for state changes, errors, and completion of the upload.
      selectedFile &&
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case "storage/unauthorized":
                // User doesn't have permission to access the object
                break;
              case "storage/canceled":
                // User canceled the upload
                break;

              // ...

              case "storage/unknown":
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          },
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log("File available at", downloadURL);
            });
          }
        );
    } catch (error) {
      console.error(error);
    }
  }, [filePath, metadata, selectedFile]);

  console.log("selectedFile", selectedFile);

  return;
};

export default useUploadFile;
