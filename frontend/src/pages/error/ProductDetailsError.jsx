import { Link } from "react-router-dom";

const ProductDetailsError = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="bg-white/50 px-6 rounded-lg shadow-md">
        <p className="text-center text-lg">
          The page you are looking for may have been removed.
        </p>
        <p className="text-center">
          Kindly go to the{" "}
          <Link to="/" className="text-blue-500 font-bold hover:underline">
            home page
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsError;
