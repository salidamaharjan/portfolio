import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { get, deleteItem } from "../lib/http";
import {
  faGithub,
  faLinkedin,
  // faReact,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../component/ui/Button";
// import { faVuejs } from "@fortawesome/free-brands-svg-icons/faVuejs";
// import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
// import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dialog } from "../component/ui/Dialog";
import SkillForm from "../component/SkillForm";
import SignedIn from "../component/SignedIn";

export type Skill = {
  id?: number;
  skillName: string;
  iconURL?: string;
};
type AboutMe = {
  id?: number;
  description: string;
};

function AboutMe() {
  const [aboutMe, setAboutMe] = useState("");
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isOpen, setIsOpen] = useState(Boolean);
  const [showX, setShowX] = useState(Boolean);

  useEffect(() => {
    fetchAboutMe();
    fetchSkill();
  }, []);
  const { username } = useParams();

  async function fetchAboutMe() {
    try {
      const aboutMeData = await get(
        `http://localhost:3001/api/aboutMe/${username || "user1"}`
      );
      setAboutMe(aboutMeData.description);
    } catch (err) {
      console.log("err", err);
    }
  }

  async function fetchSkill() {
    try {
      const skillsData = await get(
        `http://localhost:3001/api/skills/${username || "user1"}`
      );
      // console.log("skillsData", skillsData);
      setSkills(skillsData);
      setShowX(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="grid md:grid-cols-2 h-[630px] gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center flex-col gap-8">
          <img
            className="md:w-[70dvw] md:h-[70dvh] h-[30dvh] w-[50dvw] border-1 rounded-md"
            src="/images/user.jpg"
            alt="User's Image"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-center font-bold text-blue-900">
              Salida Maharjan
            </h1>
            <h2 className="text-md text-black text-center">
              Full Stack Developer
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-lg gap-6 text-blue-900 font-bold">
        <div className="flex flex-col text-lg text-blue-900">
          <div className="flex justify-between">
            <div>About Me</div>
            <SignedIn>
              <Button
                className="text-blue-900 font-normal text-xs"
                onClick={() => {}}
              >
                Edit
              </Button>
            </SignedIn>
          </div>
          <div className="font-light text-gray-700">{aboutMe}</div>
        </div>
        <div className="flex-1  text-lg text-blue-900">
          <div className="flex justify-between">
            <div>Skills</div>
            <SignedIn>
              <div className="flex gap-2">
                <Button
                  className="text-blue-900 font-normal text-xs"
                  onClick={() => {
                    return setIsOpen(true);
                  }}
                >
                  Add Skill
                </Button>
                <Button
                  className="font-normal text-xs text-red-500"
                  onClick={() => setShowX(true)}
                >
                  Delete Skill
                </Button>
              </div>
            </SignedIn>
          </div>
          <ul className="grid md:grid-cols-3 grid-cols-2 text-gray-700 list-disc ml-4 pt-2 text-lg font-light">
            {skills.map((skill) => {
              // console.log(skill.iconURL);
              return (
                <li className="text-md" key={skill.id}>
                  {skill.iconURL && (
                    <img
                      className="w-[25px] h-[25px] inline"
                      src={`${skill.iconURL}`}
                    />
                  )}{" "}
                  {skill.skillName}{" "}
                  {showX && (
                    <Button
                      className="py-0 px-1 text-red-500"
                      onClick={async () => {
                        await deleteItem(
                          `http://localhost:3001/api/skills/${skill.id}`
                        );
                        await fetchSkill();
                      }}
                    >
                      x
                    </Button>
                  )}
                </li>
              );
            })}
          </ul>
          {/* <ul className="md:columns-3 columns-2 text-gray-700 list-disc ml-4 pt-2 text-lg font-light">
            <li>
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} /> React
            </li>
            <li>
              <FontAwesomeIcon icon={faVuejs} /> Vue.js
            </li>
            <li>
              <FontAwesomeIcon icon={faNodeJs} /> Node.js
            </li>
          </ul> */}

          <Dialog
            title={"Add Skill"}
            open={isOpen}
            onClose={() => {
              return setIsOpen(false);
            }}
          >
            <SkillForm
              onAction={() => {
                fetchSkill();
              }}
            />
          </Dialog>
        </div>
        <div className="flex flex-col text-2xl gap-2 mb-16 md:mb-0">
          <div className="flex gap-2 justify-center">
            <a
              className="text-blue-900"
              href="https://github.com/salidamaharjan"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />{" "}
            </a>
            <a
              className="text-blue-500"
              href="https://www.linkedin.com/in/salida-maharjan-6381b9173/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            {/* <a
              className="text-blue-400"
              href="https://twitter.com/tweeter?lang=en" target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a> */}
          </div>
          <div className="text-center ">
            <Button className="border-l-0 text-lg hover:text-sky-400 text-gray-700 rounded-none border-b-0 border-r-0">
              Download Resume
            </Button>
            <Button className="border-b-0 text-lg hover:text-sky-400 text-gray-700 rounded-none border-r-0">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
