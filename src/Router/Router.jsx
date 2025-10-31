import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import ErrorPage from "../pages/ErrorPage";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Certifications from "../pages/Certifications";
import Education from "../pages/Education";
import Accomplishments from "../pages/Accomplishments";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/experience", 
        Component: Experience,
      },
      {
        path: "/skills", 
        Component: Skills,
      },
      {
        path: "/certifications", 
        Component: Certifications
      },
      {
        path: "/education", 
        Component: Education
      },
      {
        path: "/accomplishments", 
        Component: Accomplishments
      },
      {
        path: "/gallery",
        Component: Gallery,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
