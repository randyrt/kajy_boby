import React from 'react'
<<<<<<< HEAD
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  
=======
import router from './utils/Routes.jsx';
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
>>>>>>> a87d580080733076d6a04d19dc13a1bfd89ecbff
import './index.css';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

