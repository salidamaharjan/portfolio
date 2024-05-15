import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Signup from "./pages/Signup.tsx";
import Resume from "./pages/Resume.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Works from "./pages/Works.tsx";
import Contact from "./pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/",
        element: <Portfolio />,
        children: [
          {
            path: "resume",
            element: <Resume />,
          },
          {
            path: "aboutme",
            element: <AboutMe />,
          },
          {
            path: "works",
            element: <Works />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
      {
        path: "/u/:username",
        element: <Portfolio />,
        children: [
          {
            path: "resume",
            element: <Resume />,
          },
          {
            path: "",
            element: <AboutMe />,
          },
          {
            path: "works",
            element: <Works />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

export default router;
