import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from './components/Homepage';
import PuppyComponent from './components/Puppy';
import AboutUs from './components/AboutUs';
import Settings from './components/Settings';
import ErrorPage from './components/ErrorPage';


const appElement = document.getElementById("app");

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/settings",
                element: <Settings />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/puppies",
                element: <PuppyComponent />
            }
        ]
    }
]);


ReactDOM.render(<RouterProvider router={router} />, appElement);