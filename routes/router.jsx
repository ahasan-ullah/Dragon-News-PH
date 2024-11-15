import { createBrowserRouter, Navigate } from "react-router-dom";
import Homelayout from "../Layouts/Homelayout";
import CategoryNews from "../page/CategoryNews";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:<Homelayout></Homelayout>,
      children: [
        {
          path: "",
          element: <Navigate to={"/category/01"}></Navigate>
        },
        {
          path: "/category/:id",
          loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
          element: <CategoryNews></CategoryNews>
        }
      ]
    },
    {
      path: "/news",
      element: <h1>News Element</h1>,
    },
    {
      path: "/auth",
      element: <h1>Login</h1>,
    },
    {
      path: "*",
      element: <h1>Error</h1>,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
    },
  }
);

export default router;
