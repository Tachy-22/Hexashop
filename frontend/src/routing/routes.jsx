import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Root from "../pages/root/root";
import { rootLoader } from "./loaders";
import Mens from "../pages/men's/Mens";
import Womens from "../pages/women's/Womens";
import Kids from "../pages/kid's/Kids";
import About from "../pages/about/About";
import Contact from "../pages/contact/contact";

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
    ],
  },
];

export default routes;

//#e9e9e9 -primary
//#2d3235 -dark
