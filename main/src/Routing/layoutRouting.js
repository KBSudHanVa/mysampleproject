// import { lazy } from "react";
// import { redirect } from "react-router-dom";
import MySignin from "../Components/LoginPage/MySignin";
import MySignup from "../Components/LoginPage/MySignup";
import TaskComponent from "../Components/SubComponents/MainComponents/ComponentScreens/DataComponents/TaskComponent";
import NotFoundComponent from "../Components/SubComponents/MainComponents/ComponentScreens/ErrorComponents/NotFoundComponent";
import SideNav from "../Components/SubComponents/MainComponents/NavBarComponents/SideNav";
import HomeComponent from "../Components/SubComponents/MainComponents/ComponentScreens/DataComponents/HomeComponent";
import YourComponent from "../Components/SubComponents/MainComponents/ComponentScreens/ProfileComponents/FetchGSTINData";

// const MySignin = lazy(() => import('../Components/LoginPage/MySignin'));
// const MySignup = lazy(() => import('../Components/LoginPage/MySignup'));

// const SideNav = lazy(() => import('../Components/SubComponents/MainComponents/NavBarComponents/SideNav'));
// const HomeComponent = lazy(() => import('../Components/SubComponents/MainComponents/ComponentScreens/DataComponents/HomeComponent'));
// const TaskComponent = lazy(() => import('../Components/SubComponents/MainComponents/ComponentScreens/DataComponents/TaskComponent'));

// const NotFoundComponent = lazy(() => import('../Components/SubComponents/MainComponents/ComponentScreens/ErrorComponents/NotFoundComponent'));


const token = localStorage.getItem('token');

export const allRouter = [
    {
      path:"",
      element: <MySignin />
    },
    {
      path:"signup",
      element: <MySignup />
    },
    {
      path: "home",
      element: <SideNav />,
      children: [
        {
          path: "",
          element: <HomeComponent />
        },
        {
          path: "tasks",
          element: <TaskComponent />
        },
        {
          path: "*",
          element: <NotFoundComponent />
        }
      ]
    },
    {
      path: "profile",
      element: <YourComponent />
    },
    {
      path: "*",
      element: <NotFoundComponent/>
    }
  ]