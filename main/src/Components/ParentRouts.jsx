// import React from "react";

// import { BrowserRouter as Router, Routes, Route, Navigate, Redirect, Switch, Outlet } from 'react-router-dom';

// import MySignin from "./LoginPage/MySignin";
// import MySignup from "./LoginPage/MySignup";
// import NotFoundComponent from "./SubComponents/MainComponents/ComponentScreens/ErrorComponents/NotFoundComponent";
// import TaskComponent from "./SubComponents/MainComponents/ComponentScreens/DataComponents/TaskComponent";
// import SideNav from "./SubComponents/MainComponents/NavBarComponents/SideNav";
// export const ParentRouts = () => {


//   // const routes = [
//   //   {
//   //     path: '/login',
//   //     component: <MySignin />,
//   //   },
//   //   {
//   //     path: '/home',
//   //     component: <SideNav />,
//   //     // added nested routes
//   //     routes: [
//   //       {
//   //         // Also note how we added /home before the 
//   //         // actual page name just to create a complete path
//   //         path: '/home/tasks',
//   //         component: <TaskComponent />,
//   //       },
//   //     ],
//   //   },
//   // ];

//   return (
//     // <Router>
//     //   <Routes>
//     //     {/* Redirect from root to /login */}
//     //     <Route path="/" element={<Navigate to="/login" />} />
//     //     {/* Map over routes and render each one */}
//     //     {routes.map((route, index) => (
//     //       <SubRoutes key={index} {...route} />
//     //     ))}
//     //   </Routes>
//     // </Router>

//     <Router>
//       <Routes>
//         <Route path="/" element={<MySignin />} />
//         <Route path="signup" element={<MySignup />} />

//         <Route path="home" element={<SideNav/>} >
//           <Route path="tasks" element={ <Outlet />} />
//         </Route>

//         <Route path="profile" element={<TaskComponent />} />
//         {/* <Route path="home1/tasks" element={<SideNav> <div>tasks</div></SideNav>} />  */}
//         {/* <Route path="*" element={<NotFoundComponent />} /> */}
//       </Routes>

//       <Outlet />
//     </Router>
//   );
// }

