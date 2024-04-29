import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MySignin from "./LoginPage/MySignin";
import MySignup from "./LoginPage/MySignup";
import SubRouts from "./SubComponents/SubRouts";
import Sample from "./SignUpPremium/Sample";
import MyComponent from "./SignUpPremium/MyComponent";
import MySigninSample from "./SignUpPremium/SampleSiginPage";
import SignInPage from "./SignUpPremium/SampleSiginPage";

export const ParentRouts=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<MySignin/>}></Route>
                <Route path="signup" element={<MySignup/>}></Route>
                <Route path="home" element={<SubRouts/>}></Route>
                
                <Route path="premium" element={<Sample/>} />
                <Route path="po" element={<MyComponent/>} />
                <Route path="signinsample" element={<SignInPage/>} />
                
                
            </Routes>
        </BrowserRouter>
    )
}

