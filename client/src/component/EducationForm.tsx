import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { post } from "../lib/http";

function EducationForm() {
  const [degree, setDegree] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [yearCompletion, setYearCompletion] = useState("");
  const [description, setDescription] = useState("");

  async function handleAddClick() {
    const newEducation = await post("http://localhost:3001/api/educations", {
      degree,
      schoolName,
      startDate,
      yearCompletion,
      description,
    });
    console.log(newEducation);
    setDegree("");
    setSchoolName("");
    setStartDate("");
    setYearCompletion("");
    setDescription("");
  }

  return (
    <div className="flex flex-col border shadow-xl border-gray-900 gap-4 rounded-md p-8">
      <div className="flex justify-between text-blue-600 text-center text-xl pb-2 font-bold">
        <div>Add Your Education</div>
        <div ><Button>x</Button></div>
      </div>
      <Label className="text-black">
        Degree {" "}
        <Input
          placeholder="Add Degree"
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
      </Label>
      <Label className="text-black">
        School Name{" "}
        <Input
          placeholder="Add School Name"
          type="text"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
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
        Year Completion{" "}
        <Input
          placeholder="Add Year Completion"
          type="text"
          value={yearCompletion}
          onChange={(e) => setYearCompletion(e.target.value)}
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
      <div className="text-center">
        <Button onClick={handleAddClick}>Add</Button>
      </div>
    </div>
  );
}
export default EducationForm;
