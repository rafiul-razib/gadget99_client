import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("http://localhost:3000/productCount"),
  },
]);
