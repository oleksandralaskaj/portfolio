import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./pages/Layout.tsx";
import {ThemeContextProvider} from "./contexts/ThemeContext.tsx";
import {Home} from "./pages/Home.tsx";

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