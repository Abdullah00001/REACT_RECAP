import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layouts/Main";
import Products from "../pages/Products";
import Posts from "../pages/Posts";
import Product from "../features/products/Product";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
    ],
  },
]);

export default Routes;
