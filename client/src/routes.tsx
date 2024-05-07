import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Signup from "./pages/Signup.tsx";
import Resume from "./pages/Resume.tsx";
import AboutMe from "./pages/AboutMe.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
        children: [
          {
            path: "resume",
            element: <Resume />,
          },
          {
            path: "aboutme",
            element: <AboutMe />
          }
        ],
      },
    ],
  },
]);

export default router;
