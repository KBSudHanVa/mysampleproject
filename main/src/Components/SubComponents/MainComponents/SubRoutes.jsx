// import { BrowserRouter as Router, Routes, Route, Outlet, useParams, Link, useNavigate } from 'react-router-dom';
// import NotFoundComponent from './ComponentScreens/ErrorComponents/NotFoundComponent';
// import SideNav from './NavBarComponents/SideNav';
// import TaskComponent from './ComponentScreens/DataComponents/TaskComponent';

// function SubRoutes() {

//     const nav = useNavigate();

//     // return (
//     //     <Route
//     //       path={route.path}
//     //       element={route.element}
//     //     >
//     //       {/* Render child routes */}
//     //       {route.children && (
//     //         <Routes>
//     //           {route.children.map((childRoute, index) => (
//     //             <Route key={index} path={childRoute.path} element={childRoute.element} />
//     //           ))}
//     //         </Routes>
//     //       )}
//     //     </Route>
//     //     );

//     return (
//         <div>
//              <Routes>
//                 <Route path="" element={<div>home</div>} />
//                 <Route path="tasks" element={<TaskComponent/>} /> 
//                 {/* <Route path="*" element={<NotFoundComponent />} /> */}
//             </Routes>
//         </div>
//     );
// }

// export default SubRoutes;