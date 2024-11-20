import { createBrowserRouter } from 'react-router-dom';
import AppMainLayout from '../layouts/AppMainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import UnauthenticateLayout from '../layouts/UnauthenticateLayout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
const route = createBrowserRouter([
  {
    path: '/auth/',
    element: <UnauthenticateLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/',
    element: <AppMainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default route;
