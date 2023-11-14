import { getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

const useGetFile = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [fileRef, setImageFileRef] = useState(null);

  useEffect(() => {
    try {
      const getFile = async () => {
        const url = fileRef && (await getDownloadURL(fileRef));
        setImageUrl(url);
      };
      getFile();
    } catch (error) {
      console.log("An error occured");
      console.error(error);
    }
  }, [fileRef]);

  return [imageUrl, setImageFileRef];
};

export default useGetFile;
