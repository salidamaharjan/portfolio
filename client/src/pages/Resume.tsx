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

export type Education = {
  id?: number;
  degree: string;
  schoolName: string;
  startDate: string;
  yearCompletion: string;
  description: string;
};

export type Project = {
  id?: number;
  projectName: string;
  description: string;
  technologiesUsed: string;
};

export type Experience = {
  id?: number;
  title: string;
  company: string;
  jobDescription: string;
  startDate: string;
  endDate: string;
};
function Resume() {
  const [educations, setEducations] = useState<Education[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [educationToEdit, setEducationToEdit] = useState<Education | undefined>(
    undefined
  );
  const [projectToEdit, setProjectToEdit] = useState<Project | undefined>(
    undefined
  );
  const [experienceToEdit, setExperienceToEdit] = useState<
    Experience | undefined
  >(undefined);
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
        <div className="flex gap-2 ">
          <Button
            className="bg-green-600 text-xs text-white"
            onClick={() =>
              setEducationToEdit({
                id: undefined,
                degree: "",
                description: "",
                schoolName: "",
                startDate: "",
                yearCompletion: "",
              })
            }
          >
            Add Education
          </Button>
        </div>
        <div className="text-sm lg:text-lg ">
          {educations.map((education) => {
            return (
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
                <Button
                  className="bg-blue-600 text-xs text-white"
                  onClick={() => {
                    setEducationToEdit(education);
                  }}
                >
                  Edit Education
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="font-bold text-md lg:text-lg text-blue-600">
          {" "}
          <FontAwesomeIcon icon={faDiagramProject} /> Projects
        </div>
        <div className=" flex gap-2 ">
          <Button
            className="bg-green-600 text-xs text-white"
            onClick={() =>
              setProjectToEdit({
                id: undefined,
                projectName: "",
                description: "",
                technologiesUsed: "",
              })
            }
          >
            Add Project
          </Button>
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
                <Button
                  className="bg-blue-600 text-xs text-white"
                  onClick={() => {
                    setProjectToEdit(project);
                  }}
                >
                  Edit Project
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="font-bold text-md lg:text-lg text-blue-600">
          <FontAwesomeIcon icon={faBriefcase} /> Experiences
        </div>
        <div className="flex gap-2">
          <Button
            className="bg-green-600 text-xs text-white"
            children="Add Experience"
            onClick={() =>
              setExperienceToEdit({
                id: undefined,
                title: "",
                company: "",
                jobDescription: "",
                startDate: "",
                endDate: "",
              })
            }
          />
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
                <Button
                  className="bg-blue-600 text-xs text-white"
                  onClick={() => {
                    setExperienceToEdit(experience);
                  }}
                >
                  Edit Experience
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <Dialog
        title={educationToEdit?.id ? "Edit Education" : "Add Your Education"}
        onClose={() => setEducationToEdit(undefined)}
        open={!!educationToEdit}
      >
        <EducationForm
          education={educationToEdit}
          onAction={() => {
            fetchEducation();
            setEducationToEdit(undefined);
          }}
          formFor={educationToEdit?.id ? "Edit" : "Add"}
        />
      </Dialog>
      <Dialog
        title={projectToEdit?.id ? "Edit Project" : "Add Your Project"}
        open={!!projectToEdit}
        onClose={() => setProjectToEdit(undefined)}
      >
        <ProjectForm
          project={projectToEdit}
          onAction={async () => {
            await fetchProject();
            setProjectToEdit(undefined);
          }}
          formFor={projectToEdit?.id ? "Edit" : "Add"}
        />
      </Dialog>
      <Dialog
        title={experienceToEdit?.id ? "Edit Experience" : "Add Your Experience"}
        open={!!experienceToEdit}
        onClose={() => setExperienceToEdit(undefined)}
      >
        <ExperienceForm
          experience={experienceToEdit}
          onAction={async () => {
            await fetchExperience();
            setExperienceToEdit(undefined);
          }}
          formFor={experienceToEdit?.id ? "Edit" : "Add"}
        />
      </Dialog>
    </div>
  );
}

export default Resume;
