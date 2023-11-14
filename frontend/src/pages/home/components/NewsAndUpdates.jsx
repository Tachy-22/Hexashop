import dummyImage from "../../../assets/LoafersUiBgImg.jpg";

const NewsAndUpdates = () => {
  const newsData = [
    {
      title: "Exciting Moments from Fashion Week 2023",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ligula nec dui ullamcorper congue.",
      date: "November 10, 2023",
      image: dummyImage,
    },
    {
      title: "New Releases: Fall Collection Unveiled!",
      content:
        "Curabitur et justo eu libero efficitur vestibulum. Sed ut sem ac justo fringilla fermentum.",
      date: "November 8, 2023",
      image: dummyImage,
    },
    {
      title: "Fashion Trends: Colors to Look Out For",
      content:
        "Quisque nec justo ac odio lacinia congue. Integer fringilla mi vel nulla hendrerit, id dapibus lacus tempor.",
      date: "November 5, 2023",
      image: dummyImage,
    },

  ];

  return (
    <div className=" py-[6rem] px-2 ">
      <div className="container mx-auto flex flex-col justify-center  ">
        <h2 className="text-3xl font-bold mb-4">Trending News and Updates</h2>
        <p className="text-gray-600 pb-4 md:w-[70%]">
          Stay in the loop with the latest happenings! Discover the hottest
          trends, exclusive interviews, and exciting moments from the world of
          fashion and beyond. Explore our curated collection of news and updates
          to stay informed and inspired.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((newsItem, index) => (
            <div
              style={{ "--image-url": `url(${newsItem.image})` }}
              key={index}
              className="bg-[image:var(--image-url)]  rounded-t bg-cover xl:h-[20rem] md:h-[18rem]  h-[15rem] w-full  flex flex-col justify-center items-center text-white bg-no-repeat bg-center duration-[3s] hover:bg-left-bottom  cursor-pointer transition-all bg-white/90  rounded-sm shadow-md hover:border-2 border-blue-400"
            >
              <div className="flex flex-col w-full h-full backdrop-blur-sm hover:backdrop-blur-none p-6 transition-all duration-700 items-center justify-center ">
                <h3 className="text-xl font-bold mb-2 hover:underline underline-offset-4">
                  {newsItem.title}
                </h3>
                <p className="text-gray-100 mb-4">{newsItem.content}</p>
                <p className="text-sm text-gray-200 text-right w-full">
                  {newsItem.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
