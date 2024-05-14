import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faRectangleList,
  faDiagramProject,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";

import AboutMe from "./AboutMe";

function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname, "location");
  return (
    <div
      className="md:flex flex md:flex-row flex-col-reverse p-4 gap-6
    "
    >
      <aside className="flex flex-row justify-evenly border-t md:border-t-0 w-[100dvw] md:w-auto bg-white pb-2 md:pb-0 md:flex-col fixed bottom-0 md:sticky md:top-[60px] self-start left-0 pt-1 gap-5">
        <div
          className={`${
            location.pathname === "/aboutme" ||
            location.pathname === "/"
              ? "flex flex-col text-green-600"
              : "flex flex-col"
          }`}
          onClick={() => {
            navigate("/aboutme");
          }}
        >
          <div className="flex flex-col hover:text-green-600">
            <FontAwesomeIcon icon={faImagePortrait} />
            <span className="text-xs hover:text-green-600 text-center">
              About
            </span>
          </div>
        </div>
        <div
          className={`${
            location.pathname === "/resume"
              ? "flex flex-col text-green-600"
              : "flex flex-col"
          }`}
          onClick={() => {
            navigate("/resume");
          }}
        >
          <div className="flex flex-col hover:text-green-600">
            <FontAwesomeIcon icon={faRectangleList} />
            <span className="text-xs text-center hover:text-green-600">
              Resume
            </span>
          </div>
        </div>
        <div
          className={`${
            location.pathname === "/works"
              ? "flex flex-col text-green-600"
              : "flex flex-col"
          }`}
          onClick={() => {
            navigate("/works");
          }}
        >
          <div className="flex flex-col hover:text-green-600">
            <FontAwesomeIcon icon={faDiagramProject} />
            <span className="text-xs  hover:text-green-600 text-center">
              Works
            </span>
          </div>
        </div>
        <div
          className={`${
            location.pathname === "/contact"
              ? "flex flex-col text-green-600"
              : "flex flex-col"
          }`}
          onClick={() => {
            navigate("/contact");
          }}
        >
          <div className="flex flex-col hover:text-green-600">
            <FontAwesomeIcon icon={faEnvelopesBulk} />
            <span className="text-xs   text-center">Contact</span>
          </div>
        </div>
      </aside>
      <div className="flex-1">
        {location.pathname === "/" ? (
          <div>
            <AboutMe />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default Portfolio;
