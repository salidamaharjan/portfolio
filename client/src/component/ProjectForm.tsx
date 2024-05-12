import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { post, put } from "../lib/http";
import { Project } from "../pages/Resume";

type ProjectFormProps = {
  onAction: () => void;
  formFor: string;
  project?: Project;
};

function ProjectForm({ onAction, project, formFor }: ProjectFormProps) {
  const [projectName, setProjectName] = useState(project?.projectName ?? "");
  const [description, setDescription] = useState(project?.description ?? "");
  const [technologiesUsed, setTechnologiesUsed] = useState(project?.technologiesUsed ?? "");

  async function handleAddClick() {
    const newProject = await post("http://localhost:3001/api/projects", {
      projectName,
      description,
      technologiesUsed,
    });
    console.log(newProject);
    setProjectName("");
    setDescription("");
    setTechnologiesUsed("");
    onAction();
  }
  async function handleEditClick() {
    const newProject = await put(
      `http://localhost:3001/api/projects/${project?.id}`,
      {
        projectName,
        description,
        technologiesUsed,
      }
    );
    console.log(newProject);
    setProjectName("");
    setDescription("");
    setTechnologiesUsed("");
    onAction();
  }

  return (
    <div className="flex flex-col gap-4">
      <Label className="text-black">
        Project Name{" "}
        <Input
          placeholder="Add Project Name"
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </Label>
      <Label className="text-black">
        Description{" "}
        <Input
          placeholder="Add Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Label>
      <Label className="text-black">
        Technologies Used{" "}
        <Input
          placeholder="Add Technologies Used"
          type="text"
          value={technologiesUsed}
          onChange={(e) => setTechnologiesUsed(e.target.value)}
        />
      </Label>
      <div className="text-center">
        <Button
          className="bg-green-600 text-white"
          onClick={() => {
            if (formFor === "Add") {
              handleAddClick();
            } else {
              handleEditClick();
            }
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
export default ProjectForm;
