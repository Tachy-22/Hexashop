import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const FooterData = [
  {
    section: "shoping Categories",
    items: ["Men", "women", "kids"],
  },
  {
    section: "useful Links",
    items: ["homepage", "about us", "help", "contact us"],
  },
  {
    section: "support",
    items: ["faq's", "shipping", "tracking"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark flex flex-col text-white">
      <div className=" flex justify-between items-center">
        <>
          <div className="lg:hidden flex justify-center">
            {/* <Mobile /> */}
          </div>
          <div className="hidden lg:flex w-full  justify-between gap-[4rem] px-[15rem] py-10">
            <div className="flex flex-col justify-between w-max gap-[1rem] px-6">
              <div className="bg-white/90 w-fit p-2 rounded-md" id="logo">
                <img src={Logo} alt="" className="" />
              </div>
              <div className="">
                <span className="font-semibold">Address:</span> 123 Main Street,
                Cityville, Country
              </div>
              <div className="">
                <span className="font-semibold">E-mail:</span>{" "}
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
              <div className="">
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+123456789">+1 (234) 567-89</a>
              </div>
            </div>

            <div className="flex justify-between flex-grow  w-fit gap-[1rem]  ">
              {FooterData.map((section, index) => {
                return (
                  <div key={index} className=" w-fit">
                    <h2 className="font-bold text-start mb-4 text-xl uppercase">
                      {" "}
                      {section.section}
                    </h2>
                    <div className="flex flex-col">
                      {section.items.map((item, index) => {
                        return (
                          <div className="text-start" key={index}>
                            <Link
                              to="./"
                              className="hover:underline capitalize text-white"
                            >
                              {item}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </div>
      <div className="bg-black text-gray-500 p-4 flex text-center justify-between items-center">
        <p className=" text-center w-full">copyright (c) 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
