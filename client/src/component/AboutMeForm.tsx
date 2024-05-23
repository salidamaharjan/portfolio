import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { useState } from "react";
import { AboutMe } from "../pages/AboutMe";

type AboutMeFormProps = {
  onAction: (
    updatedDescription: string,
    aboutMeId: number | undefined,
    title: string,
    name: string
  ) => void;
  aboutMe?: AboutMe;
};

function AboutMeForm({ onAction, aboutMe }: AboutMeFormProps) {
  const [description, setDescription] = useState(aboutMe?.description);
  const [name, setName] = useState(aboutMe?.name || "");
  const [title, setTitle] = useState(aboutMe?.title || "");
  return (
    <div className="flex flex-col gap-4 ">
      <Label className="text-black">
        About Me{" "}
        <Input
          className="font-normal text-sm"
          placeholder="Update About Me"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Label>
      <Label className="text-black">
        Name{" "}
        <Input
          className="font-normal text-sm"
          placeholder="Your Full Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Label>
      <Label className="text-black">
        Title{" "}
        <Input
          className="font-normal text-sm"
          placeholder="Title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Label>
      <div className="text-center">
        <Button
          className="bg-green-600 text-white"
          onClick={() => {
            onAction(description || "", aboutMe?.id, title || "", name || "");
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
export default AboutMeForm;
