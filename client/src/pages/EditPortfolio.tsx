import EducationForm from "../component/EducationForm";
import ExperienceForm from "../component/ExperienceForm";
import ProjectForm from "../component/ProjectForm";
import { Dialog } from "../component/ui/Dialog";
import { useState } from "react";
import Button from "../component/ui/Button";
import { useNavigate } from "react-router-dom";


function EditPortfolio() {
  const [educationDialogOpen, setEducationDialogOpen] = useState(false);
  const [experienceDialogOpen, setExperienceDialogOpen] = useState(false);
  const [projectDialogOpen, setProjectDialogOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 ">
          <Button
            className="bg-green-500 text-white"
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
        <div className="flex gap-2">
          <Button
            className="bg-green-500 text-white"
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
        <div className=" flex gap-2 ">
          <Button
            className="bg-green-500 text-white"
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
        <Button className="bg-blue-600 text-white" onClick={()=> navigate("/portfolio")}>Go Back</Button>
      </div>
    </>
  );
}
export default EditPortfolio;
