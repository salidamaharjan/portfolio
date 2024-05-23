import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { AboutMe } from "../pages/AboutMe";

type AboutMeFormProps = {
  onAction: (updatedDescription: string, aboutMeId: number | undefined) => void;
  aboutMe?: AboutMe;
};

function AboutMeForm({ onAction, aboutMe }: AboutMeFormProps) {
  const [description, setDescription] = useState(aboutMe?.description);

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
            onAction(description || "", aboutMe?.id );
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
export default AboutMeForm;
