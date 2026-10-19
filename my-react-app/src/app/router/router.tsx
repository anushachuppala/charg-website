import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "../../widgets/app-shell/AppShell.tsx";

const loadHomePage = () => import("../../pages/HomePage/HomePage.tsx");

const loadAboutPage = () => import("../../pages/AboutUs/AboutPage.tsx");

const loadProductsPage = () => import("../../pages/Products/ProductsPage");

const loadSolutionsPage = () =>
  import("../../pages/Solutions/SolutionsPage.tsx");

const loadBestHubPage = () => import("../../pages/BestHub/BestHubPage.tsx");

const loadBlogPage = () => import("../../pages/Blog/Blog.tsx");

const loadResourcesPage = () => import("../../pages/Resources/Resources.tsx");

const loadEmissionCalculator = () =>
  import("../../pages/EmissionCalculator/EmissionCalculator.tsx");

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await loadHomePage()).default,
        }),
      },
      {
        path: "/about",
        lazy: async () => ({
          Component: (await loadAboutPage()).default,
        }),
      },
      {
        path: "/products/:slug",
        lazy: async () => ({
          Component: (await loadProductsPage()).default,
        }),
      },
      {
        path: "/solutions/:slug",
        lazy: async () => ({
          Component: (await loadSolutionsPage()).default,
        }),
      },
      {
        path: "/Resources",
        lazy: async () => ({
          Component: (await loadResourcesPage()).default,
        }),
      },
      {
        path: "/EmissionCalculator",
        lazy: async () => ({
          Component: (await loadEmissionCalculator()).default,
        }),
      },
      {
        path: "/besthub",
        lazy: async () => ({
          Component: (await loadBestHubPage()).default,
        }),
      },
      {
        path: "/blog",
        lazy: async () => ({
          Component: (await loadBlogPage()).default,
        }),
      },
    ],
  },
]);
