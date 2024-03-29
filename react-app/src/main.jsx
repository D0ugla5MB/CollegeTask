import React from 'react';
import ReactDOM from 'react-dom/client';
import * as BrowerRouter from 'react-router-dom';
import App from './App.jsx';
import Universidade from './components/Universidade.jsx';
import './index.css';

const router = BrowerRouter.createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/universidade",
    element: <Universidade />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowerRouter.RouterProvider router={router} />
  </React.StrictMode>
);
