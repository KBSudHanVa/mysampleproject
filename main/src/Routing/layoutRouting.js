import { redirect } from "react-router-dom";
import MySignin from "../Components/LoginPage/MySignin";
import MySignup from "../Components/LoginPage/MySignup";
import TaskComponent from "../Components/SubComponents/MainComponents/ComponentScreens/DataComponents/TaskComponent";
import NotFoundComponent from "../Components/SubComponents/MainComponents/ComponentScreens/ErrorComponents/NotFoundComponent";
import SideNav from "../Components/SubComponents/MainComponents/NavBarComponents/SideNav";
import HomeComponent from "../Components/SubComponents/MainComponents/ComponentScreens/DataComponents/HomeComponent";

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
    }
  ]