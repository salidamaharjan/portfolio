import { get } from "../lib/http";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faBriefcase,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../component/ui/Button";
import { Dialog } from "../component/ui/Dialog";
import EducationForm from "../component/EducationForm";
import ExperienceForm from "../component/ExperienceForm";
import ProjectForm from "../component/ProjectForm";

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
  const [educationDialogOpen, setEducationDialogOpen] = useState(false);
  const [experienceDialogOpen, setExperienceDialogOpen] = useState(false);
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
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
        <div className="font-bold text-md lg:text-lg text-blue-600">
          <FontAwesomeIcon icon={faAward} /> Education
        </div>
        <div className="text-sm lg:text-lg ">
          {educations.map((education) => {
            return (
              <div>
                <div key={education.id}>
                  {" "}
                  <div className="font-bold text-sm">{education.degree}</div>
                  <li>{education.description}</li>
                  <li>{education.schoolName}</li>
                  <li>{education.startDate}</li>
                  <li>{`${
                    education.yearCompletion === null
                      ? "current"
                      : education.yearCompletion
                  }`}</li>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2 ">
          <Button
            className="bg-green-600 text-white"
            children="Add Education"
            onClick={() => setEducationDialogOpen(true)}
          />
          <Dialog
            title="Add Your Education"
            open={educationDialogOpen}
            onClose={() => setEducationDialogOpen(false)}
          >
            <EducationForm />
          </Dialog>
        </div>
      </div>
      <div>
        <div className="font-bold text-md lg:text-lg text-blue-600">
          {" "}
          <FontAwesomeIcon icon={faDiagramProject} /> Projects
        </div>
        <div className="text-sm lg:text-lg ">
          {projects.map((project) => {
            return (
              <div key={project.id}>
                {" "}
                <div className="font-bold text-sm">{project.projectName}</div>
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
        <div className=" flex gap-2 ">
          <Button
            className="bg-green-600 text-white"
            children="Add Project"
            onClick={() => setProjectDialogOpen(true)}
          />
          <Dialog
            title="Add Your Project"
            open={projectDialogOpen}
            onClose={() => setProjectDialogOpen(false)}
          >
            <ProjectForm />
          </Dialog>
        </div>
      </div>
      <div>
        <div className="font-bold text-md lg:text-lg text-blue-600">
          <FontAwesomeIcon icon={faBriefcase} /> Experiences
        </div>
        <div className="text-sm lg:text-lg ">
          {experiences.map((experience) => {
            return (
              <div key={experience.id}>
                {" "}
                <div className="font-bold text-sm">{experience.title}</div>
                <li>{experience.company}</li>
                <li>{experience.jobDescription}</li>
                <li>{`${
                  experience.startDate === null
                    ? "current"
                    : experience.startDate
                }`}</li>
                <li>{`${
                  experience.endDate === null ? "current" : experience.endDate
                }`}</li>
              </div>
            );
          })}
        </div>
        <div className="flex gap-2">
          <Button
            className="bg-green-600 text-white"
            children="Add Experience"
            onClick={() => setExperienceDialogOpen(true)}
          />
          <Dialog
            title="Add Your Experience"
            open={experienceDialogOpen}
            onClose={() => setExperienceDialogOpen(false)}
          >
            <ExperienceForm />
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Resume;
