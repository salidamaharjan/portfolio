import { get, deleteEducation } from "../lib/http";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import { jwtDecode } from "jwt-decode";
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
  const { username } = useParams();
  useEffect(() => {
    fetchEducation();
    fetchProject();
    fetchExperience();
  }, []);
  const token = localStorage.getItem("token");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decoded = jwtDecode(token || "") as any;
  console.log("decoded", decoded);
  async function fetchEducation() {
    try {
      const educationData = await get(
        `http://localhost:3001/api/educations/${username}`
      );
      setEducations(educationData);
      // console.log("educationData", educationData);
    } catch (err) {
      console.log("err", err);
    }
  }
  async function fetchProject() {
    try {
      const projectData = await get(
        `http://localhost:3001/api/projects/${username}`
      );
      setProjects(projectData);
      // console.log("projectData", projectData);
    } catch (err) {
      console.log("err", err);
    }
  }
  async function fetchExperience() {
    try {
      const experienceData = await get(
        `http://localhost:3001/api/experiences/${username}`
      );
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
      <div className="flex gap-1 flex-col shadow-[0_0_3px_1px_#ccc] rounded-md p-4">
        <div className="flex justify-between font-bold text-md lg:text-lg text-blue-900">
          <div>
            <FontAwesomeIcon icon={faAward} /> Education
          </div>
          {decoded.username === username ? (
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
          ) : (
            <></>
          )}
        </div>
        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-500 flex-wrap lg:text-lg ">
          {educations.map((education) => {
            return (
              <div key={education.id}>
                {" "}
                <div className="grid gap-1">
                  <div className="font-medium text-black text-sm">
                    {education.degree} at {education.schoolName}
                    <div className="text-xs font-normal text-gray-400">
                      {education.startDate} -{" "}
                      {`${
                        !education.yearCompletion
                          ? "Current"
                          : education.yearCompletion
                      }`}
                    </div>
                  </div>
                  <li className="text-xs">{education.description}</li>
                </div>
                {decoded.username === username ? (
                  <div className="flex mt-2 gap-4">
                    <Button
                      className="text-xs font-normal text-blue-900"
                      onClick={() => {
                        setEducationToEdit(education);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="text-red-600 font-normal text-xs"
                      onClick={() => handleDeleteEducation(education.id!)}
                    >
                      Delete
                    </Button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-1 flex-col shadow-[0_0_3px_1px_#ccc] rounded-md p-4">
        <div className="flex justify-between font-bold text-md lg:text-lg text-blue-900">
          <div>
            {" "}
            <FontAwesomeIcon icon={faDiagramProject} /> Projects
          </div>
          {decoded.username === username ? (
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
          ) : (
            <></>
          )}
        </div>
        <div className="text-sm text-gray-500 grid grid-cols-1 md:grid-cols-2 gap-10 flex-wrap  lg:text-lg ">
          {projects.map((project) => {
            return (
              <div key={project.id}>
                {" "}
                <div className="font-medium text-sm text-black last:text-sm">
                  {project.projectName}
                </div>
                <div className="text-xs">
                  <li>{project.description}</li>
                  <li>{project.technologiesUsed}</li>
                </div>
                {decoded.username === username ? (
                  <div className="flex mt-2  gap-4">
                    <Button
                      className="text-blue-900 font-normal text-xs"
                      onClick={() => {
                        setProjectToEdit(project);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="text-red-600 font-normal text-xs "
                      onClick={() => handleDeleteProject(project.id!)}
                    >
                      Delete
                    </Button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-1 flex-col shadow-[0_0_3px_1px_#ccc] rounded-md mb-10 md:mb-0 p-4">
        <div className="flex justify-between font-bold text-md lg:text-lg text-blue-900">
          <div>
            <FontAwesomeIcon icon={faBriefcase} /> Experiences
          </div>
          {decoded.username === username ? (
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
          ) : (
            <></>
          )}
        </div>
        <div className="text-sm text-gray-500 grid grid-cols-1 md:grid-cols-2 gap-10 flex-wrap lg:text-lg ">
          {experiences.map((experience) => {
            return (
              <div key={experience.id}>
                {" "}
                <div className="grid gap-1">
                  <div className="font-medium text-sm text-black last:text-sm">
                    {experience.title} at {experience.company}
                    <div className="text-xs font-normal text-gray-400">
                      {`${experience.startDate}`} -{" "}
                      {`${
                        !experience.endDate ? "current" : experience.endDate
                      }`}
                    </div>
                  </div>
                  <li className="text-xs">{experience.jobDescription}</li>
                </div>
                {decoded.username === username ? (
                  <div className="flex mt-2 gap-4">
                    <Button
                      className="text-blue-900 font-normal text-xs"
                      onClick={() => {
                        setExperienceToEdit(experience);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="text-red-600 font-normal text-xs "
                      onClick={() => handleDeleteExperience(experience.id!)}
                    >
                      Delete
                    </Button>
                  </div>
                ) : (
                  <></>
                )}
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
