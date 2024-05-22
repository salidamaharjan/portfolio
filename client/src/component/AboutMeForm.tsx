import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { put } from "../lib/http";
import { AboutMe } from "../pages/AboutMe";

type AboutMeFormProps = {
  onAction: () => void;
  aboutMe?: AboutMe;
};

function AboutMeForm({ onAction, aboutMe }: AboutMeFormProps) {
  const [description, setDescription] = useState(aboutMe?.description ?? "");

  async function handleEditClick() {
    await put(`http://localhost:3001/api/aboutMe/${aboutMe?.id}`, {
      description,
    });
    setDescription("");
    onAction();
  }

  return (
    <div className="flex flex-col gap-4 ">
      <Label className="text-black">
        About Me{" "}
        <Input
          placeholder="Update About Me"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Label>
      <div className="text-center">
        <Button
          className="bg-green-600 text-white"
          onClick={() => {
            handleEditClick();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
export default AboutMeForm;
