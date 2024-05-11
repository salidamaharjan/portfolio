import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faRectangleList,
  faDiagramProject,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../component/ui/Button";
import Resume from "./Resume";

function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname, "location");
  return (
    <div
      className="flex gap-16
    "
    >
      <aside className="flex flex-col pt-1 gap-5">
        <div
          className={`${
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
          <FontAwesomeIcon icon={faDiagramProject} />
          <span className="text-xs text-center">Works</span>
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
          <FontAwesomeIcon icon={faEnvelopesBulk} />
          <span className="text-xs text-center">Contact</span>
        </div>
      </aside>
      <div>
        {location.pathname === "/portfolio" ? (
          <div className="w-[88dvw] h-[80dvh]">
            <div className="flex justify-between">
              <div>
                <Resume />
              </div>
                <Button
                  className="flex bg-blue-500 h-[35px] text-white"
                  onClick={() => navigate("/portfolio/editPortfolio")}
                >
                  Edit Portfolio
                </Button>
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
