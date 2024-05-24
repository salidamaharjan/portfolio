import { post } from "../lib/http";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { Skill } from "../pages/AboutMe";

type SkillFormProps = {
  onAction: () => void;
  skill?: Skill;
  iconURL?: Skill;
};
function SkillForm({ skill, onAction }: SkillFormProps) {
  const [skillName, setSkillName] = useState(skill?.skillName ?? "");
  const [iconURL, setIconURL] = useState(skill?.iconURL ?? "");
  const [showAdd, setShowAdded] = useState("");

  async function handleSaveClick() {
    await post("/api/skills", {
      skillName,
      iconURL,
    });
    setShowAdded("Added ✅");
    setSkillName("");
    setIconURL("");
    onAction();
  }
  return (
    <div className="flex flex-col gap-4 ">
      <Label className="text-black text-md">
        Skill{" "}
        <Input
          className="text-md"
          placeholder="Add Skill"
          type="text"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />
      </Label>
      <Label className="text-black text-md">
        Icon URL{" "}
        <Input
          className="text-md"
          placeholder="Add Icon URL"
          type="text"
          value={iconURL}
          onChange={(e) => setIconURL(e.target.value)}
        />
      </Label>
      <div className="text-green-600 text-xs">{showAdd}</div>
      <div className="text-center">
        <Button
          className="bg-green-600  text-sm text-white"
          onClick={() => handleSaveClick()}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default SkillForm;
