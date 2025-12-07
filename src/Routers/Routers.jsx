import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddProperty from "../pages/AddProperty";
import PrivateRoutes from "./PrivateRoutes";
import AllProperties from "../pages/AllProperties";
import PropertyDetails from "../pages/PropertyDetails";
import MyRatings from "../pages/MyRatings";
import MyProperties from "../pages/MyProperties";
import UpdateProperty from "../pages/UpdateProperty";

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
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <PropertyDetails></PropertyDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-properties",
        element: (
          <PrivateRoutes>
            <AddProperty></AddProperty>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-ratings",
        element: (
          <PrivateRoutes>
            <MyRatings></MyRatings>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-properties",
        element: (
          <PrivateRoutes>
            <MyProperties></MyProperties>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-property/:id",
        element: (
          <PrivateRoutes>
            <UpdateProperty></UpdateProperty>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
