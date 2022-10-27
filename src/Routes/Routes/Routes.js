import { createBrowserRouter, Navigate } from "react-router-dom";
import Blog from "../../components/Blog";
import Courses from "../../components/Courses";
import FQA from "../../components/FQA";

import SignIn from "../../components/SignIn/SignIn";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import TernsAndCondition from "../../Pages/Others/TermsAndConditions/TernsAndCondition";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <PrivateRoute><Courses></Courses></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/course/:id',
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TernsAndCondition></TernsAndCondition>
            }

            // {
            //     path: '/courses',
            //     element: <Courses></Courses>
            // },
            // {
            //     path: '/fqa',
            //     element: <FQA></FQA>
            // },
            // {
            //     path: '/blog',
            //     element: <Blog></Blog>
            // },
            // {
            //     path: '/signIn',
            //     element: <SignIn></SignIn>
            // },
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // }

        ]
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    },
])