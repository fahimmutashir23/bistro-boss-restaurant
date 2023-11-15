import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact"
import Menu from "../Pages/OurMenu/OurMenu"
import Shop from "../Pages/Shop/Shop"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Cart from "../Pages/Cart/Cart"
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivetRoute from "../PrivetRoute/PrivetRoute";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
        ]
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/registration",
        element: <Registration></Registration>
    },
    {
        path: "/dashboard",
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children:[
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/cart",
                element: <Cart></Cart>
            },
        ]
    }
])

export default Routes;