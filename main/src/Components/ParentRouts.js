import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MySignin from "./LoginPage/MySignin";
import MySignup from "./LoginPage/MySignup";
import SubRouts from "./SubComponents/SubRouts";

export const ParentRouts=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<MySignin/>}></Route>
                <Route path="signup" element={<MySignup/>}></Route>
                <Route path="home" element={<SubRouts/>}></Route>                
            </Routes>
        </BrowserRouter>
    )
}

