import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { post } from "../lib/http";

type EducationFormProps = {
  onAdd: () => void;
};

function EducationForm({ onAdd }: EducationFormProps) {
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
    onAdd();
  }

  return (
    <div className="flex flex-col gap-4 ">
      <Label className="text-black">
        Degree{" "}
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
        <Button className="bg-green-600 text-white" onClick={handleAddClick}>
          Add
        </Button>
      </div>
    </div>
  );
}
export default EducationForm;
