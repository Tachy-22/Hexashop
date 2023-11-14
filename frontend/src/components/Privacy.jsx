const VerticalBorder = () => {
  return <div className="h-[1.5rem] w-[1px] bg-gray-300"></div>;
};

const Privacy = () => {
  return (
    <div className="bg-gray-900 text-xs flex text-gray-300 flex-col justify-center items-center  gap-[2rem] py-[2rem]">
      <div className="flex gap-[1rem]">
        <a>Your Privacy Choices</a>
        <VerticalBorder />
        <a>Privacy Policy</a>
        <VerticalBorder />
        <a>Terms and Conditions</a>
      </div>
      <a className="">(c) 2023 adibaba Nigeria, Inc</a>
    </div>
  );
};

export default Privacy;
