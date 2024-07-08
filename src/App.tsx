import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./components/Layout.tsx";
import {ThemeContextProvider} from "./contexts/ThemeContext.tsx";
import {Home} from "./components/Home.tsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/label-beauty",
                element: <span>label</span>
            }
        ]
    },
]);

export function App() {
    return <ThemeContextProvider>
        <RouterProvider router={router}/>
    </ThemeContextProvider>
}