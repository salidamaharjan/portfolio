import { get } from "../lib/http";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImagePortrait,
  faRectangleList,
  faDiagramProject,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";

type EducationProps = {
  id: number;
  degree: string;
  schoolName: string;
  startDate: string;
  yearCompletion: string;
  description: string;
};

type ProjectProps = {
  id: number;
  projectName: string;
  description: string;
  technologiesUsed: string;
};

function Portfolio() {
  const [educations, setEducations] = useState<EducationProps[]>([]);
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetchEducation();
    fetchProject();
  }, []);
  async function fetchEducation() {
    try {
      const educationData = await get("http://localhost:3001/api/educations");
      setEducations(educationData);
      // console.log("educationData", educationData);
    } catch (err) {
      console.log("err", err);
    }
  }
  async function fetchProject() {
    try {
      const projectData = await get("http://localhost:3001/api/projects");
      setProjects(projectData);
    } catch (err) {
      console.log("err", err);
    }
  }
  return (
    <div className="flex">
      <aside className="flex flex-col gap-5">
        <div className="flex flex-col">
          <FontAwesomeIcon icon={faImagePortrait} />
          <span className="text-xs text-center">About</span>
        </div>
        <div className=" flex flex-col">
          <FontAwesomeIcon icon={faRectangleList} />
          <span className="text-xs text-center"> Resume</span>
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
      <div>
        <div className="font-bold text-sm lg:text-lg text-blue-600">
          Education
        </div>
        <div className="text-sm lg:text-lg ">
          {educations.map((education) => {
            return (
              <div key={education.id}>
                {" "}
                <div className="font-bold">{education.degree}</div>
                <li>{education.description}</li>
                <li>{education.schoolName}</li>
                <li>{education.startDate}</li>
                <li>{`${
                  education.yearCompletion === null
                    ? "current"
                    : education.yearCompletion
                }`}</li>
              </div>
            );
          })}
        </div>
        <div className="font-bold text-sm lg:text-lg text-blue-600">
          Projects
        </div>
        <div className="text-sm lg:text-lg ">
          {projects.map((project) => {
            return (
              <div key={project.id}>
                {" "}
                <div className="font-bold">{project.projectName}</div>
                <li>{project.description}</li>
                <li>{project.technologiesUsed}</li>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
