import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './Home.jsx'
import { Consumo } from './Consumo.jsx'
import { Carrousel } from './Carrousel.jsx'
import { RickAndMorty } from './RickAndMorty'
import { MaskInput } from './MaskInput'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
  },
  {
    path: "/Consumo",
    element: < Consumo />
  },

  {
    path: "/Carrousel",
    element: < Carrousel />
  },

  {
    path: "/RickAndMorty",
    element: < RickAndMorty />
  },

  {
    path: "/MaskInput",
    element: < MaskInput />
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

