import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Register";
import ErrorPage from "../pages/ErrorPage";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";

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
            },
            {
                path: "/job/:id",
                element: <JobDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <UpdateJob />,
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },
            {
                path: "/add-job",
                element: <AddJob />
            },
            {
                path: "/my-posted-jobs",
                element: <MyPostedJobs />
            }
        ]
    },
]);



