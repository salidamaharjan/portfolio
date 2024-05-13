import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faRectangleList,
  faDiagramProject,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";

// import Resume from "./Resume";
import AboutMe from "./AboutMe";

function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname, "location");
  return (
    <div
      className="flex p-4 gap-6
    "
    >
      <aside className="flex flex-col pt-1 gap-5">
        <div
          className={`${
            location.pathname === "/portfolio/aboutme" ||
            location.pathname === "/portfolio"
              ? "flex flex-col text-green-600"
              : "flex flex-col"
          }`}
          onClick={() => {
            navigate("/portfolio/aboutme");
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
            location.pathname === "/portfolio/resume"
              ? "flex flex-col text-green-600"
              : "flex flex-col"
          }`}
          onClick={() => {
            navigate("/portfolio/resume");
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
            location.pathname === "/portfolio/works"
              ? "flex flex-col text-green-600"
              : "flex flex-col"
          }`}
          onClick={() => {
            navigate("/portfolio/works");
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
            location.pathname === "/portfolio/contact"
              ? "flex flex-col text-green-600"
              : "flex flex-col"
          }`}
          onClick={() => {
            navigate("/portfolio/contact");
          }}
        >
          <div className="flex flex-col hover:text-green-600">
            <FontAwesomeIcon icon={faEnvelopesBulk} />
            <span className="text-xs   text-center">Contact</span>
          </div>
        </div>
      </aside>
      <div className="flex flex-1 px-4 justify-between">
        {location.pathname === "/portfolio" ? (
          <div className="w-[88dvw] h-[80dvh] flex justify-between">
              <div>
                <AboutMe />
                {/* <Resume /> */}
              </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default Portfolio;
