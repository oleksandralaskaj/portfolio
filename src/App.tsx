import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout.tsx";
import { ThemeContextProvider } from "./contexts/ThemeContext.tsx";
import { Home } from "./pages/Home.tsx";
import { FloorPlanner } from "./pages/FloorPlanner.tsx";
import { LabelBeauty } from "./pages/LabelBeauty.tsx";
import { MyPortfolio } from "./pages/MyPortfolio.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/label-beauty",
        element: <LabelBeauty />,
      },
      {
        path: "/floor-planner",
        element: <FloorPlanner />,
      },
      {
        path: "/my-portfolio",
        element: <MyPortfolio />,
      },
    ],
  },
]);

export function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}
