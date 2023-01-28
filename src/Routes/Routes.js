import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import Search from "../Pages/Search";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/search',
                element: <Search></Search>
            },
            {
                path: '/:id',
                loader: ({params}) => fetch(`https://api.spacexdata.com/v3/launches/${params.id}`),
                element: <Details></Details>
            }
        ]
    }
])