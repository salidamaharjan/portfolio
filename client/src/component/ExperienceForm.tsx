import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { post, put } from "../lib/http";
import { Experience } from "../pages/Resume";

type ExperienceAddFormProps = {
  onAction: () => void;
  formFor: string;
  experience?: Experience;
};

function ExperienceForm({
  onAction,
  formFor,
  experience,
}: ExperienceAddFormProps) {
  const [title, setTitle] = useState(experience?.title ?? "");
  const [company, setCompany] = useState(experience?.company ?? "");
  const [jobDescription, setJobDescription] = useState(experience?.jobDescription ?? "");
  const [startDate, setStartDate] = useState(experience?.startDate ?? "");
  const [endDate, setEndDate] = useState(experience?.endDate ?? "");

  async function handleAddClick() {
    const newExperience = await post("http://localhost:3001/api/experiences", {
      title,
      company,
      jobDescription,
      startDate,
      endDate,
    });
    console.log(newExperience);
    setTitle("");
    setCompany("");
    setStartDate("");
    setEndDate("");
    setJobDescription("");
    onAction();
  }

  async function handleEditClick() {
    const newExperience = await put(
      `http://localhost:3001/api/experiences/${experience?.id}`,
      {
        title,
        company,
        jobDescription,
        startDate,
        endDate,
      }
    );
    console.log(newExperience);
    setTitle("");
    setCompany("");
    setStartDate("");
    setEndDate("");
    setJobDescription("");
    onAction();
  }

  return (
    <div className="flex flex-col gap-4 ">
      <Label className="text-black">
        Title{" "}
        <Input
          placeholder="Add Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Label>
      <Label className="text-black">
        Company{" "}
        <Input
          placeholder="Add Company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </Label>
      <Label className="text-black">
        Job Description{" "}
        <Input
          placeholder="Add Job Description"
          type="text"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </Label>
      <Label className="text-black">
        Start Date{" "}
        <Input
          placeholder="Add Start Date"
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </Label>
      <Label className="text-black">
        End Date{" "}
        <Input
          placeholder="Add End Date"
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
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
export default ExperienceForm;
