import React from 'react'
import ReactDOM from 'react-dom/client'
import * as BrowerRouter from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import UniversidadeView from './components/Universidade.jsx';
import AlunoView from './components/Aluno.jsx';
const router = BrowerRouter.createBrowserRouter(
  [{
    path: "/",
    element: <App />,
  },
  {
    path: "/universidade",
    element: <UniversidadeView/>,
  },
  {
    path: "/aluno",
    element: <AlunoView/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowerRouter.RouterProvider router={router} />
  </React.StrictMode>
);
