import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import DashBoard from "./components/DashBoard/DashBoard";
import Home from "./components/Home/Home";
import PlaceDetail from "./components/PlaceDetail/PlaceDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: '/places/:placesId',
        element: <PlaceDetail></PlaceDetail>,
        loader: () => fetch('/places.json')
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
