import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layouts/Homelayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:<Homelayout></Homelayout>,
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
