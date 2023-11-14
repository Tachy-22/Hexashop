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

const routes = [
  {
    path: "/",
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
        path: "/men's",
        element: <Mens />,
        //loader: contactLoader,
        errorElement: <Error />,
        children: [
          {
            index: "/men's",
            element: <All />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: "/men's/shirts",
            element: <Shirts />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: "/men's/trousers",
            element: <Trousers />,
            //loader: contactLoader,
            errorElement: <Error />,
          },

          {
            path: "/men's/jackets",
            element: <Jackets />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: "/men's/jeans",
            element: <Jeans />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: "/men's/sweaters",
            element: <Sweaters />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
          {
            path: "/men's/shoes",
            element: <Shoes />,
            //loader: contactLoader,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "/women's",
        element: <Womens />,
        //loader: contactLoader,
        errorElement: <Error />,
      },
      {
        path: "/kid's",
        element: <Kids />,
        //loader: contactLoader,
        errorElement: <Error />,
      },
      {
        path: "/about us",
        element: <About />,
        //loader: contactLoader,
        errorElement: <Error />,
      },
      {
        path: "/contact us",
        element: <Contact />,
        //loader: contactLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        //loader: contactLoader,
        errorElement: <Error />,
      },
    ],
  },
];

export default routes;

//#e9e9e9 -primary
//#2d3235 -dark
