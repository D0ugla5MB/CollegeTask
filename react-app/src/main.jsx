import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home.jsx'
import Universidade from './components/Universidade.jsx'
import Aluno from './components/Aluno.jsx'
import Profesor from './components/Professor.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ExcecaoMsg from './components/excecaoTrat.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ExcecaoMsg />

  },
  {
    path: "/universidade",
    element: <Universidade />,
  },
  {
    path: "/aluno",
    element: <Aluno  />,
    
  },
  {
    path: "/professor",
    element: <Profesor />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
