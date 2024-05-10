import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { post } from "../lib/http";

function ExperienceForm() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
        <Button onClick={handleAddClick}>Add</Button>
      </div>
    </div>
  );
}
export default ExperienceForm;
