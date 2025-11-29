import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddProperty from "../pages/AddProperty";
import PrivateRoutes from "./PrivateRoutes";
import AllProperties from "../pages/AllProperties";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/all-properties",
        Component: AllProperties,
      },
      {
        path: "/add-properties",
        element: (
          <PrivateRoutes>
            <AddProperty></AddProperty>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
