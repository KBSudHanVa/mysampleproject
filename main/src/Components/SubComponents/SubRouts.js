import { Outlet } from "react-router-dom";
import SideNav from "./MainComponents/NavBarComponents/SideNav.jsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function SubRouts(){
    return ( 
        <div className="subrouts">
            <SideNav/>
            <Outlet />

        </div>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="" element={<SideNav/>}></Route>
        //         {/* <Route path="*" element={<ErrorComponent />} />                */}
        //         {/* <Route path="*" element={<NotFoundComponent propnav=""/>}/> */}
        //     </Routes>
        // </BrowserRouter>
     );
}
 
export default SubRouts;