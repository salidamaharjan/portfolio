import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { get, deleteItem, put, post } from "../lib/http";
import {
  faGithub,
  faLinkedin,
  // faReact,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../component/ui/Button";
// import { faVuejs } from "@fortawesome/free-brands-svg-icons/faVuejs";
// import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
// import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dialog } from "../component/ui/Dialog";
import SkillForm from "../component/SkillForm";
import SignedIn from "../component/SignedIn";
import AboutMeForm from "../component/AboutMeForm";

export type Skill = {
  id?: number;
  skillName: string;
  iconURL?: string;
};
export type AboutMe = {
  id?: number;
  name: string | undefined;
  title: string | undefined;
  description: string | undefined;
  gitHubURL: string | undefined;
  linkedInURL: string | undefined;
};

function AboutMe() {
  const [aboutMe, setAboutMe] = useState<AboutMe | undefined>(undefined);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isAddSKillOpen, setAddSkillIsOpen] = useState(Boolean);
  const [isEditAboutMeOpen, setEditAboutMeOpen] = useState(Boolean);
  const [showX, setShowX] = useState(Boolean);
  useEffect(() => {
    fetchAboutMe();
    fetchSkill();
  }, []);
  const { username } = useParams();
  const navigate = useNavigate();
  async function fetchAboutMe() {
    try {
      const aboutMeData = await get(`/api/aboutMe/${username || "user1"}`);
      setAboutMe(aboutMeData);
    } catch (err) {
      console.log("err", err);
    }
  }

  async function fetchSkill() {
    try {
      const skillsData = await get(`/api/skills/${username || "user1"}`);
      // console.log("skillsData", skillsData);
      setSkills(skillsData);
      setShowX(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 h-[630px] gap-2">
      <div
        className="col-span-3 flex flex-col gap-
      "
      >
        <div className="flex items-center flex-col gap-5">
          <img
            className="md:w-[500px] md:h-[450px] h-[30dvh] w-[50dvw] border-1 rounded-md"
            src="/images/user.jpg"
            alt="User's Image"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-xl text-center font-bold text-blue-900">
              {aboutMe?.name}
            </h1>
            <h2 className="text-md text-black text-center">{aboutMe?.title}</h2>
          </div>
          <div className="flex flex-col text-2xl gap-2">
            <div className="flex gap-2 justify-center">
              <a
                className="text-blue-900"
                href={aboutMe?.gitHubURL}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />{" "}
              </a>
              <a
                className="text-blue-500"
                href={aboutMe?.linkedInURL}
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="text-center ">
              {/* <Button className="border-l-0 text-lg hover:text-sky-400 text-gray-700 rounded-none border-b-0 border-r-0">
              Download Resume
            </Button> */}
              <Button
                className="border-b-0 text-sm hover:text-sky-400 text-gray-700 rounded-none border-r-0"
                onClick={() => navigate("contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-4 flex flex-col text-lg gap-6 text-blue-900 font-bold">
        <div className="flex flex-col text-lg text-blue-900">
          <div className="flex justify-between">
            <div>About Me</div>
            <SignedIn>
              <Button
                className="text-blue-900 font-normal text-xs"
                onClick={() => setEditAboutMeOpen(true)}
              >
                Edit
              </Button>
            </SignedIn>
          </div>
          <div className="font-light text-gray-700">{aboutMe?.description}</div>
        </div>
        <div className="mb-14 md:mb-0 text-lg text-blue-900">
          <div className="flex justify-between">
            <div>Skills</div>
            <SignedIn>
              <div className="flex gap-2">
                <Button
                  className="text-blue-900 font-normal text-xs"
                  onClick={() => setAddSkillIsOpen(true)}
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
                        await deleteItem(`/api/skills/${skill.id}`);
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
          <Dialog
            title={"Update About Me"}
            open={isEditAboutMeOpen}
            onClose={() => {
              return setEditAboutMeOpen(false);
            }}
          >
            <AboutMeForm
              aboutMe={aboutMe}
              onAction={async (
                updatedDescription,
                aboutMeId,
                title,
                name,
                gitHubURL,
                linkedInURL
              ) => {
                // console.log("updatedDescription", updatedDescription);
                if (aboutMeId) {
                  await put(`/api/aboutMe/${aboutMeId}`, {
                    description: updatedDescription,
                    title,
                    name,
                    gitHubURL,
                    linkedInURL,
                  });
                } else {
                  await post(`/api/aboutMe`, {
                    title,
                    name,
                    gitHubURL,
                    linkedInURL,
                    description: updatedDescription,
                  });
                }
                setEditAboutMeOpen(false);
                fetchAboutMe();
              }}
            />
          </Dialog>
          <Dialog
            title={"Add Skill"}
            open={isAddSKillOpen}
            onClose={() => {
              return setAddSkillIsOpen(false);
            }}
          >
            <SkillForm
              onAction={() => {
                fetchSkill();
              }}
            />
          </Dialog>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
