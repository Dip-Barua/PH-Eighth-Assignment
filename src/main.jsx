
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';
import Root from './Components/Root/Root';
import ContactUs from './Components/ContactUs/ContactUs';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error></Error>,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'gadgets/:product_id', 
        element: <GadgetDetails />,
        loader: () => fetch ('/gadgets.json')
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/contactus',
        element: <ContactUs />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
