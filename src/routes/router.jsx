import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import CheckOut from "../pages/CheckOut";
import AddNewService from "../pages/AddNewService";
import ErrorPage from "../pages/ErrorPage";
import CartDetails from "../pages/CartDetails";
import ManageAllOrders from "../pages/ManageAllOrders";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            },{
                path:'/checkout',
                element:<CheckOut></CheckOut>
            },
            {
                path:"/addservice",
                element:<AddNewService></AddNewService>
            },
            {
                path:'/cartdetails',
                element:<CartDetails></CartDetails>
            },
            {
                path:'/manageallorders',
                element:<ManageAllOrders></ManageAllOrders>
            }
        ]
    }
])
export default router