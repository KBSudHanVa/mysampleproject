import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MySignin from "./LoginPage/MySignin";
import MySignup from "./LoginPage/MySignup";
import SubRouts from "./SubComponents/SubRouts";
import NotFoundComponent from "./SubComponents/MainComponents/ComponentScreens/ErrorComponents/NotFoundComponent";
import TaskComponent from "./SubComponents/MainComponents/ComponentScreens/DataComponents/TaskComponent";

export const ParentRouts=()=>{
    return (
        <Router>
      <Routes>
        <Route path="/" element={<MySignin />} />
        <Route path="signup" element={<MySignup />} />
        <Route path="home" element={<SubRouts />} exact />
        <Route path="profile" element={<TaskComponent />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </Router>
      );
}

