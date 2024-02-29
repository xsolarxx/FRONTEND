import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { Home } from '../pages/Home/Home';
import { ChangePassword } from '../pages/Login/ChangePassword';
import { CheckCode } from '../pages/Login/CheckCode';
import { ForgotPassword } from '../pages/Login/ForgotPassword';
import { FormProfile } from '../pages/Login/FormProfile';
import { Login } from '../pages/Login/Login';
import { Profile } from '../pages/Login/Profile';
import { Register } from '../pages/Register/Register';
/*import {Dashboard} from "../pages/Dashboard/Dashboard"*/

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      /*{
        path: "/dashboard",
        element: <Dashboard />,
      },*/
      {
        path: '/forgotPassword',
        element: <ForgotPassword />,
      },
      {
        path: '/verifyCode',
        element: <CheckCode />,
      },
      {
        path: '/profile',
        element: <Profile />,
        children: [
          {
            path: '/profile/changePassword',
            element: <ChangePassword />,
          },
          {
            path: '/profile/',
            element: <FormProfile />,
          },
        ],
      },
    ],
  },
]);
