import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faRectangleList,
  faDiagramProject,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";
import EducationForm from "../component/EducationForm";
import ExperienceForm from "../component/ExperienceForm";
import ProjectForm from "../component/ProjectForm";
import Button from "../component/ui/Button";
import { Dialog } from "../component/ui/Dialog";
import { useState } from "react";

function Portfolio() {
  const[educationDialogOpen, setEducationDialogOpen] = useState(false);
  const[experienceDialogOpen, setExperienceDialogOpen] = useState(false);
  const[projectDialogOpen, setProjectDialogOpen] = useState(false);

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
          <div>
            <div className="text-red-500 font-bold">Portfolio</div>
            <div className="flex gap-2 ">
              <Button
                children="Add Education"
                onClick={() => setEducationDialogOpen(true) }
              />
              <Dialog title="Add Your Education" open={educationDialogOpen} ><EducationForm/></Dialog>
            </div>
            <div className="flex gap-2 ">
              <Button
                children="Add Experience"
                onClick={() => setExperienceDialogOpen(true) }
              />
              <Dialog title="Add Your Experience" open={experienceDialogOpen} ><ExperienceForm/></Dialog>
            </div>
            <div className=" flex gap-2 ">
              <Button
                children="Add Project"
                onClick={() => setProjectDialogOpen(true) }
              />
              <Dialog title="Add Your Project"open={projectDialogOpen} ><ProjectForm/></Dialog>
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
