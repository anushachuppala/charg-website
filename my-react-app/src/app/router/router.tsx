import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "../../widgets/app-shell/AppShell.tsx";

const loadAboutPage = () => import("../../pages/AboutUs/AboutPage.tsx");

const loadProductsPage = () => import("../../pages/Products/ProductsPage");

const loadSolutionsPage = () =>
  import("../../pages/Solutions/SolutionsPage.tsx");

const loadBestHubPage = () => import("../../pages/BestHub/BestHubPage.tsx");

const loadEmissionCalculator = () =>
  import("../../pages/EmissionCalculator/EmissionCalculator.tsx");

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await loadBestHubPage()).default,
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
        path: "/EmissionCalculator",
        lazy: async () => ({
          Component: (await loadEmissionCalculator()).default,
        }),
      },
    ],
  },
]);
