import {createBrowserRouter} from 'react-router-dom';
import NotificationSettings from '../views/NotificationSettings.tsx';
import App from '../App.tsx';
import Home from '../views/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/notification-test-two/',
    element: <App />,
    children: [
      {
        path: '/notification-test-two/',
        element: <Home></Home>,
      },
      {
        path: '/notification-test-two/notification-settings',
        element: <NotificationSettings></NotificationSettings>,
      },
    ],
  },
]);

export {router};
