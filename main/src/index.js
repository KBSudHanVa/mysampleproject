import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MySignin from './Components/LoginPage/MySignin';
import MySignup from './Components/LoginPage/MySignup';
import SideNav from './Components/SubComponents/MainComponents/NavBarComponents/SideNav';
import TaskComponent from './Components/SubComponents/MainComponents/ComponentScreens/DataComponents/TaskComponent';
import NotFoundComponent from './Components/SubComponents/MainComponents/ComponentScreens/ErrorComponents/NotFoundComponent';
import { allRouter } from './Routing/layoutRouting';

const router = createBrowserRouter(allRouter)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*  <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
