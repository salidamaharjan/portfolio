import { get } from "../lib/http";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

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

type ExperienceProps = {
  id: number;
  title: string;
  company: string;
  jobDescription: string;
  startDate: string;
  endDate: string;
};
function Resume() {
  const [educations, setEducations] = useState<EducationProps[]>([]);
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [experiences, setExperiences] = useState<ExperienceProps[]>([]);
  useEffect(() => {
    fetchEducation();
    fetchProject();
    fetchExperience();
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
      // console.log("projectData", projectData);
    } catch (err) {
      console.log("err", err);
    }
  }

  async function fetchExperience() {
    try {
      const experienceData = await get("http://localhost:3001/api/experiences");
      setExperiences(experienceData);
      // console.log("experienceData", experienceData);
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <div className="flex gap-4">
      <div>
        <div className="font-bold text-sm lg:text-lg text-blue-600">
          <FontAwesomeIcon icon={faAward} /> Education
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
      </div>
      <div>
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
                <li>{`${
                  project.technologiesUsed === null
                    ? "current"
                    : project.technologiesUsed
                }`}</li>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="font-bold text-sm lg:text-lg text-blue-600">
          Experiences
        </div>
        <div className="text-sm lg:text-lg ">
          {experiences.map((experience) => {
            return (
              <div key={experience.id}>
                {" "}
                <div className="font-bold">{experience.title}</div>
                <li>{experience.company}</li>
                <li>{experience.jobDescription}</li>
                <li>{experience.startDate}</li>
                <li>{experience.endDate}</li>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Resume;
