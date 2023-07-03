import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './root.tsx';
import Cart from './pages/cart.tsx';
import Homepage from './pages/homepage.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import DirectionsEng from './pages/directions.tsx';
import Reservation from './pages/reserve.tsx';
import ProductProvider from './context/Context.tsx';
import ErrorPage from './pages/error.tsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Homepage />
          },
          {
            path: "/directions",
            element: <DirectionsEng />
          },
          {
            path: "/reservation",
            element: <Reservation />
          }
        ]
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </React.StrictMode>,
)
