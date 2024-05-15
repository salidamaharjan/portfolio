import {
  useNavigate,
  useLocation,
  Outlet,
  useParams,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faImagePortrait,
  faRectangleList,
  faDiagramProject,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

function Portfolio() {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = useParams();

  useEffect(() => {
    // For now default profile is set to my user
    if (!username) {
      navigate("/u/user1");
    }
  }, [username, navigate]);

  return (
    <div className="md:flex flex md:flex-row flex-col-reverse p-4 gap-6">
      <aside className="flex flex-row justify-evenly border-t md:border-t-0 w-[100dvw] md:w-auto bg-white pb-2 md:pb-0 md:flex-col fixed bottom-0 md:sticky md:top-[60px] self-start left-0 pt-1 gap-5">
        <div
          className={clsx("flex flex-col", {
            "text-green-600": location.pathname.endsWith(username || "/"),
          })}
          onClick={() => navigate("")}
        >
          <div className="flex flex-col hover:text-green-600">
            <FontAwesomeIcon icon={faImagePortrait} />
            <span className="text-xs hover:text-green-600 text-center">
              About Me
            </span>
          </div>
        </div>
        <div
          className={clsx("flex flex-col", {
            "text-green-600": location.pathname.endsWith("/resume"),
          })}
          onClick={() => navigate("resume")}
        >
          <div className="flex flex-col hover:text-green-600">
            <FontAwesomeIcon icon={faRectangleList} />
            <span className="text-xs text-center hover:text-green-600">
              Resume
            </span>
          </div>
        </div>
        <div
          className={clsx("flex flex-col", {
            "text-green-600": location.pathname.endsWith("/works"),
          })}
          onClick={() => navigate("works")}
        >
          <div className="flex flex-col hover:text-green-600">
            <FontAwesomeIcon icon={faDiagramProject} />
            <span className="text-xs  hover:text-green-600 text-center">
              Works
            </span>
          </div>
        </div>
        <div
          className={clsx("flex flex-col", {
            "text-green-600": location.pathname.endsWith("/contact"),
          })}
          onClick={() => navigate("contact")}
        >
          <div className="flex flex-col hover:text-green-600">
            <FontAwesomeIcon icon={faEnvelopesBulk} />
            <span className="text-xs   text-center">Contact</span>
          </div>
        </div>
      </aside>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Portfolio;
