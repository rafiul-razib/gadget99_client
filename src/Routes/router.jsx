import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import Root from "../Pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://gadget99-server.vercel.app/productCount"),
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <NotFound />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
