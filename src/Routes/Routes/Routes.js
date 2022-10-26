import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog";
import Courses from "../../components/Courses";
import FQA from "../../components/FQA";
import Register from "../../components/Register/Register";
import SignIn from "../../components/SignIn/SignIn";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course/:id',
                element: <Course></Course>
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
    }
])