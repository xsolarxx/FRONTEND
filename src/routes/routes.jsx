import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { Protected } from '../components/ProtectedRoute/Protected';
import { ProtectedCheckChildren } from '../components/ProtectedRoute/ProtectedCheckChildren';
import {
  Company,
  CompanyDetail,
  Forum,
  ForumDetail,
  ForumPage,
  News,
  ProfileDetail,
} from '../pages';
import { CompanyPage } from '../pages/Company/CompanyPage';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Home } from '../pages/Home/Home';
import { ChangePassword } from '../pages/Login/ChangePassword';
import { CheckCode } from '../pages/Login/CheckCode';
import { ForgotPassword } from '../pages/Login/ForgotPassword';
import { FormProfile } from '../pages/Login/FormProfile';
import { Login } from '../pages/Login/Login';
import { Profile } from '../pages/Login/Profile';
import { NewsPage } from '../pages/News/News';
import { NewsDetail } from '../pages/News/NewsDetail';
import { Register } from '../pages/Register/Register';
import { ProfilePage } from '../pages/Profiles/ProfilePage';

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
      {
        path: '/company',
        element: <CompanyPage />,
      },
      {
        path: '/companyDetail/:id',
        element: <CompanyDetail />,
      },
      {
        path: '/createcompany',
        element: <Company />,
      },
      {
        path: '/profiles',
        element: <ProfilePage />,
      },
      {
        path: '/news',
        element: <NewsPage />,
      },
      {
        path: '/newsDetail/:id',
        element: <NewsDetail />,
      },
      {
        path: '/createnews',
        element: <News />,
      },
      {
        path: '/dashboard',
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: '/forgotPassword',
        element: <ForgotPassword />,
      },
      {
        path: '/verifyCode',
        element: (
          <ProtectedCheckChildren>
            <CheckCode />
          </ProtectedCheckChildren>
        ),
      },
      {
        path: '/profile',
        element: (
          <Protected>
            <FormProfile />
          </Protected>
        ),
      },

      {
        path: '/changePassword',
        element: (
          <Protected>
            <ChangePassword />
          </Protected>
        ),
      },
      {
        path: '/forum',
        element: (
          <Protected>
            <Forum />
          </Protected>
        ),
      },
      {
        path: '/forumPage',
        element: (
          <Protected>
            <ForumPage />
          </Protected>
        ),
      },
      {
        path: '/forumDetail/:id',
        element: (
          <Protected>
            <ForumDetail />
          </Protected>
        ),
      },
      {
        path: '/profileDetail/:id',
        element: (
          <Protected>
            <ProfileDetail />
          </Protected>
        ),
      },
    ],
  },
]);
