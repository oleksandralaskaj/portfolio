import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./components/Layout.tsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <span className="nav">home</span>
            },
            {
                path: "/label-beauty",
                element: <span>label</span>
            }
        ]
    },
]);


export function App() {
    return <RouterProvider router={router}/>
}