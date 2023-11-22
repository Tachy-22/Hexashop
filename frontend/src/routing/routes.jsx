import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Root from "../pages/root/Root";
import { rootLoader } from "./loaders";
import Mens from "../pages/men's/Mens";
import Womens from "../pages/women's/Womens";
import Kids from "../pages/kid's/Kids";
import About from "../pages/about/About";
import Contact from "../pages/contact/contact";
import Shirts from "../pages/men's/components/Shirts";
import Trousers from "../pages/men's/components/Trousers";
import Jackets from "../pages/men's/components/Jackets";
import Jeans from "../pages/men's/components/Jeans";
import Sweaters from "../pages/men's/components/Sweaters";
import Shoes from "../pages/men's/components/Shoes";
import All from "../pages/men's/components/All";
import Cart from "../pages/cart/Cart";

import {
  homePath,
  mensPath,
  womensPath,
  kidsPath,
  cartPath,
  aboutUsPath,
  contactUsPath,
  mensShirtsPath,
  mensTrousersPath,
  mensJacketsPath,
  mensJeansPath,
  mensSweatersPath,
  mensShoesPath,
  womensSkirtsPath,
  womensJacketsPath,
  womensShoesPath,
  womensJeansPath,
  womensDressesPath,
  womensTopsPath,
  kidsTopsPath,
  kidsBottomsPath,
  kidsDressesPath,
  kidsJacketsPath,
  kidsShoesPath,
  productDetailsPath,
  accessoriesPath,
  accessoriesHatsPath,
  accessoriesBagsPath,
  accessoriesJewelryPath,
  accessoriesScarvesPath,
  accessoriesSunglassesPath,
} from "./paths";
import AllWomen from "../pages/women's/components/AllWomen";
import WomenSkirts from "../pages/women's/components/WomenSkirts";
import WomenShoes from "../pages/women's/components/WomenShoes";
import WomenJeans from "../pages/women's/components/WomenJeans";
import WomenDresses from "../pages/women's/components/WomenDresses";
import WomenTops from "../pages/women's/components/WomenTops";
import AllKids from "../pages/kid's/components/AllKids";
import KidsTops from "../pages/kid's/components/KidsTops";
import KidsBottoms from "../pages/kid's/components/KidsBottoms";
import KidsDresses from "../pages/kid's/components/KidsDresses";
import KidsJackets from "../pages/kid's/components/KidsJackets";
import KidsShoes from "../pages/kid's/components/KidsShoes";
import ProductDetails from "../components/ProductDetails";
import ProductDetailsError from "../pages/error/ProductDetailsError";
import Accesories from "../pages/accesories/Accesories";

const routes = [
  {
    path: homePath,
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
    // action: rootAction,
    children: [
      {
        index: true,
        element: <Home />,
        //loader: contactLoader,
        errorElement: <Error />,
      },
      {
        path: mensPath,
        element: <Mens />,
        //loader: contactLoader,
        errorElement: <Error />,
        children: [
          {
            path: mensPath,
            element: <All />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: mensShirtsPath,
            element: <Shirts />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: mensTrousersPath,
            element: <Trousers />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: mensJacketsPath,
            element: <Jackets />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: mensJeansPath,
            element: <Jeans />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: mensSweatersPath,
            element: <Sweaters />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: mensShoesPath,
            element: <Shoes />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: womensPath,
        element: <Womens />,
        //loader: contactLoader,
        errorElement: <Error />,
        children: [
          {
            path: womensPath,
            element: <AllWomen />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: womensSkirtsPath,
            element: <WomenSkirts />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: womensShoesPath,
            element: <WomenShoes />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: womensJeansPath,
            element: <WomenJeans />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: womensJacketsPath,
            element: <Jeans />,
            //loader: contactLoader,
            errorElement: <Error />,
          },

          {
            path: womensDressesPath,
            element: <WomenDresses />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: womensTopsPath,
            element: <WomenTops />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: kidsPath,
        element: <Kids />,
        //loader: contactLoader,
        errorElement: <Error />,
        children: [
          {
            path: kidsPath,
            element: <AllKids />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: kidsTopsPath,
            element: <KidsTops />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: kidsBottomsPath,
            element: <KidsBottoms />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: kidsDressesPath,
            element: <KidsDresses />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: kidsJacketsPath,
            element: <KidsJackets />,
            //loader: contactLoader,
            errorElement: <Error />,
          },

          {
            path: kidsShoesPath,
            element: <KidsShoes />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: accessoriesPath,
        element: <Accesories />,
        //loader: contactLoader,
        errorElement: <Error />,
        children: [
          {
            path: accessoriesPath,
            element: <AllKids />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: accessoriesHatsPath,
            element: <KidsTops />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: accessoriesBagsPath,
            element: <KidsBottoms />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: accessoriesJewelryPath,
            element: <KidsDresses />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: accessoriesScarvesPath,
            element: <KidsJackets />,
            //loader: contactLoader,
            errorElement: <Error />,
          },

          {
            path: accessoriesSunglassesPath,
            element: <KidsShoes />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: aboutUsPath,
        element: <About />,
        //loader: contactLoader,
        errorElement: <Error />,
      },
      {
        path: contactUsPath,
        element: <Contact />,
        //loader: contactLoader,
        errorElement: <Error />,
      },
      {
        path: cartPath,
        element: <Cart />,
        //loader: contactLoader,
        errorElement: <Error />,
      },
      {
        path: productDetailsPath,
        element: <ProductDetails />,

        errorElement: <ProductDetailsError />,
      },
    ],
  },
];

export default routes;

//#e9e9e9 -primary
//#2d3235 -dark
