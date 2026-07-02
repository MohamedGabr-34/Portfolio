import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { ProjectDetails } from "../pages/ProjectDetails";

import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectId",
        element: <ProjectDetails />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
