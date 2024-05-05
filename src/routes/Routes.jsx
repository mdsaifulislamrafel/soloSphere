import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/registration",
                element: <Registration />
            }
        ]
    },
]);



