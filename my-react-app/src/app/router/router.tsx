import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "../../widgets/app-shell/AppShell.tsx";
import About from "../../pages/AboutUs/AboutPage";
import ProductsPage from "../../pages/Products/ProductsPage.tsx";
import SolutionsPage from "../../pages/Solutions/SolutionsPage.tsx";
import BestHubPage from "../../pages/BestHub/BestHubPage.tsx";
import BlogPage from "../../pages/Blog/Blog.tsx";

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/solutions",
        element: <SolutionsPage />,
      },
      {
        path: "/besthub",
        element: <BestHubPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
    ],
  },
]);
