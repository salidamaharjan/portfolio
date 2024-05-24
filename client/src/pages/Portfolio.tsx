import { useNavigate, Outlet, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faImagePortrait,
  faRectangleList,
  faDiagramProject,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";
import AsideLinks from "../component/AsideLinks";

function Portfolio() {
  const navigate = useNavigate();
  const { username } = useParams();

  useEffect(() => {
    // For now default profile is set to my user
    if (!username) {
      navigate("/u/user1");
    }
  }, [username, navigate]);

  return (
    <div className="md:flex flex md:flex-row flex-col-reverse p-4">
      <aside className="flex flex-row justify-evenly border-t md:border-t-0 w-[100dvw] md:w-auto bg-white pb-2 md:pb-0 md:flex-col fixed bottom-0 md:sticky md:top-[60px] self-start left-0 pt-1 gap-5">
        <AsideLinks
          path={`username || ""`}
          onClick={() => navigate("")}
          fontTag={<FontAwesomeIcon icon={faImagePortrait} />}
          title="About Me"
        />
        <AsideLinks
          path="/resume"
          title="Resume"
          onClick={() => navigate("resume")}
          fontTag={<FontAwesomeIcon icon={faRectangleList} />}
        />
        <AsideLinks
          title="Works"
          onClick={() => navigate("works")}
          path="/works"
          fontTag={<FontAwesomeIcon icon={faDiagramProject} />}
        />
        <AsideLinks
          title="Contact"
          path="/contact"
          fontTag={<FontAwesomeIcon icon={faEnvelopesBulk} />}
          onClick={() => navigate("contact")}
        />
      </aside>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Portfolio;
