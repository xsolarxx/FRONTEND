import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Register,
  Login,
  Profile,
  Dashboard,
  ForgotPassword,
  CheckCode,
  FormProfile,
  ChangePassword,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "/verifyCode",
        element: <CheckCode />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile/changePassword",
            element: <ChangePassword />,
          },
          {
            path: "/profile/",
            element: <FormProfile />,
          },
        ],
      },
    ],
  },
]);
