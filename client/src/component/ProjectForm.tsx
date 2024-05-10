import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { post } from "../lib/http";

function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [technologiesUsed, setTechnologiesUsed] = useState("");

  async function handleAddClick() {
    const newProject = await post("http://localhost:3001/api/experiences", {
      projectName,
      description,
      technologiesUsed,
    });
    console.log(newProject);
    setProjectName("");
    setDescription("");
    setTechnologiesUsed("");
  }

  return (
    <div className="flex flex-col border shadow-xl border-gray-900 gap-4 rounded-md p-8">
      <div className="text-blue-600 text-center text-xl pb-2 font-bold">
        Add Your Experience
      </div>
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
        Description {" "}
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
        <Button onClick={handleAddClick}>Add</Button>
      </div>
    </div>
  );
}
export default ProjectForm;
