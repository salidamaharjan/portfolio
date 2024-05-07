import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faRectangleList,
  faDiagramProject,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname, "location");
  return (
    <div className="flex gap-4">
      <aside className="flex flex-col pt-1 gap-5">
        <div className={`${
            location.pathname === "/portfolio/aboutme"
              ? "flex flex-col text-green-600"
              : "flex flex-col"
          }`}
          onClick={() => {
            navigate("/portfolio/aboutme");
          }}
          >
          <FontAwesomeIcon icon={faImagePortrait} />
          <span className="text-xs text-center">About</span>
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
          <FontAwesomeIcon icon={faRectangleList} />
          <span className="text-xs text-center">Resume</span>
        </div>
        <div className=" flex flex-col">
          <FontAwesomeIcon icon={faDiagramProject} />
          <span className="text-xs text-center">Works</span>
        </div>
        <div className=" flex flex-col">
          <FontAwesomeIcon icon={faEnvelopesBulk} />
          <span className="text-xs text-center">Contact</span>
        </div>
      </aside>
      {location.pathname === "/portfolio" ? <div className="text-red-500 font-bold">Portfolio</div> : <Outlet />}
    </div>
  );
}

export default Portfolio;
