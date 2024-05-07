import { get } from "../lib/http";
import { useState, useEffect } from "react";

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
    <div>
      <div className="font-bold text-lg text-blue-600">Education</div>
      <div className="text-sm ">
        {educations.map((education) => {
          return (
            <div key={education.id}>
              {" "}
              <div className="font-bold">{education.degree}</div>
              <li>{education.description}</li>
              <li>{education.schoolName}</li>
              <li>{education.startDate}</li>
              <li>{`${education.yearCompletion === null ? "current" : ""}`}</li>
            </div>
          );
        })}
      </div>
      <div className="font-bold text-lg text-blue-600">Projects</div>
      <div className="text-sm ">
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
  );
}

export default Portfolio;
