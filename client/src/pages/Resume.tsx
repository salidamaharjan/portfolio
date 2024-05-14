import { get, deleteEducation } from "../lib/http";
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
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

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

  async function handleDeleteEducation(id: number) {
    try {
      await deleteEducation(`http://localhost:3001/api/educations/${id}`);
      fetchEducation();
    } catch (err) {
      console.log("err", err);
    }
  }
  async function handleDeleteExperience(id: number) {
    try {
      await deleteEducation(`http://localhost:3001/api/experiences/${id}`);
      fetchExperience();
    } catch (err) {
      console.log("err", err);
    }
  }

  async function handleDeleteProject(id: number) {
    try {
      await deleteEducation(`http://localhost:3001/api/projects/${id}`);
      fetchProject();
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="border-2 border-gray-300 rounded-md p-4">
        <div className="flex justify-between font-bold text-md lg:text-lg text-blue-900">
          <div>
            <FontAwesomeIcon icon={faAward} /> Education
          </div>
          <div className="group flex relative">
            <Button
              className="text-green-700 font-normal text-xs"
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
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <span
              className="group-hover:opacity-100 transition-opacity  px-1 text-xs text-green-600 rounded-md absolute top-[-30px]
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
            >
              Add Education
            </span>
          </div>
        </div>

        <div className="text-sm flex gap-10 text-gray-500 flex-wrap lg:text-lg ">
          {educations.map((education) => {
            return (
              <div key={education.id}>
                {" "}
                <div className="font-bold text-black text-sm">
                  {education.degree}
                </div>
                <li>{education.description}</li>
                <li>{education.schoolName}</li>
                <li>{education.startDate}</li>
                <li>{`${
                  !education.yearCompletion
                    ? "Current"
                    : education.yearCompletion
                }`}</li>
                <div className="flex gap-4">
                  <Button
                    className="text-xs text-blue-900"
                    onClick={() => {
                      setEducationToEdit(education);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    className="text-red-600 text-xs"
                    onClick={() => handleDeleteEducation(education.id!)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-2 border-gray-300 rounded-md p-4">
        <div className="flex justify-between font-bold text-md lg:text-lg text-blue-900">
          <div>
            {" "}
            <FontAwesomeIcon icon={faDiagramProject} /> Projects
          </div>
          <div className="group flex relative">
            <Button
              className="text-green-700 text-xs font-normal"
              onClick={() =>
                setProjectToEdit({
                  id: undefined,
                  projectName: "",
                  description: "",
                  technologiesUsed: "",
                })
              }
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <span
              className="group-hover:opacity-100 transition-opacity  px-1 text-xs text-green-600 rounded-md absolute top-[-25px]
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
            >
              Add Project
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-500 flex gap-10 flex-wrap  lg:text-lg ">
          {projects.map((project) => {
            return (
              <div key={project.id}>
                {" "}
                <div className="font-bold text-black last:text-sm">
                  {project.projectName}
                </div>
                <li>{project.description}</li>
                <li>{project.technologiesUsed}</li>
                <div className="flex gap-4">
                  <Button
                    className="text-blue-600 text-xs"
                    onClick={() => {
                      setProjectToEdit(project);
                    }}
                  >
                    Edit Project
                  </Button>
                  <Button
                    className="text-red-600 text-xs "
                    onClick={() => handleDeleteProject(project.id!)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-2 border-gray-300 rounded-md p-4">
        <div className="flex justify-between font-bold text-md lg:text-lg text-blue-900">
          <div>
            <FontAwesomeIcon icon={faBriefcase} /> Experiences
          </div>
          <div className="group flex relative">
            <Button
              className="text-green-700 text-xs font-normal"
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
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
            <span
              className="group-hover:opacity-100 transition-opacity  px-1 text-xs text-green-600 rounded-md absolute top-[-30px]
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto"
            >
              Add Experience
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-500 flex gap-10 flex-wrap lg:text-lg ">
          {experiences.map((experience) => {
            return (
              <div key={experience.id}>
                {" "}
                <div className="font-bold text-black last:text-sm">
                  {experience.title}
                </div>
                <li>{experience.company}</li>
                <li>{experience.jobDescription}</li>
                <li>{`${
                  experience.startDate === null
                    ? "current"
                    : experience.startDate
                }`}</li>
                <li>{`${
                  !experience.endDate ? "current" : experience.endDate
                }`}</li>
                <div className="flex gap-4">
                <Button
                  className="text-blue-600 text-xs"
                  onClick={() => {
                    setExperienceToEdit(experience);
                  }}
                >
                  Edit Experience
                </Button>
                <Button
                  className="text-red-600 text-xs "
                  onClick={() => handleDeleteExperience(experience.id!)}
                >
                  Delete
                </Button>
                </div>
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
          onAction={async () => {
            await fetchEducation();
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
