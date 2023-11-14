import { useEffect, useState } from "react";

const useConvertToImageUrl = (inputString) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
   try {
     // Split the input string into parts based on "-"
     const parts = inputString.split("-");
     // Extract the file name and dimensions and format
     const fileName = parts[1];
     const dimensions = parts[2];
     const fileExtension = parts[3];
     // Create the URL format
     const url = `https://cdn.sanity.io/images/vg6zwgyt/production/${fileName}-${dimensions}.${fileExtension}`;
    
     setImageUrl(url);
   } catch (error) {
     console.error(error);
   }
  }, [inputString]);

  return [imageUrl];
};

export default useConvertToImageUrl;
