import { post } from "../lib/http";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";

function SkillForm() {
  const [skillName, setSkillName] = useState("");

  async function handleSaveClick() {
    await post("http://localhost:3001/api/skills", {
      skillName,
    });
  }
  return (
    <div className="flex flex-col gap-4 ">
      <Label className="text-black">
        Skill{" "}
        <Input
          placeholder="Add Skill"
          type="text"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />
      </Label>

      <div className="text-center">
        <Button
          className="bg-green-600 text-white"
          onClick={() => handleSaveClick()}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default SkillForm;
