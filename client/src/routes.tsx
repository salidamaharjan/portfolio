import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import AboutMe from "./pages/AboutMe";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
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
