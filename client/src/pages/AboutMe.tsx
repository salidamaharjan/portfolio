import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../component/ui/Button";
import { faVuejs } from "@fortawesome/free-brands-svg-icons/faVuejs";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
function AboutMe() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <img
            className="w-[80dvw] h-[70dvh] border-1 rounded-md"
            src="/images/user.jpg"
            alt="User's Image"
          />
          <h1 className="text-sm text-center font-bold text-blue-900">
            Salida Maharjan
          </h1>
          <h2 className="text-xs text-black text-center">
            Full Stack Developer
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-blue-900 font-bold">
        About Me
        <div className="font-light text-gray-700">
          I am Salida Maharjan, full stack web developer. I am from Minnesota,
          USA. Highly motivated coding boot camp graduate with a passion in web
          development.
        </div>
        <div className="flex-1 text-blue-900">
          Skills
          <ul className="columns-3 pt-2 font-light">
            <li className="text-gray-700 list-disc text-sm">
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </li>
            <li className="text-gray-700 list-disc text-sm">
              <img
                className="w-[15px] inline"
                src="https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"
                alt="TypeScript"
              />{" "}
              TypeScript
            </li>
            <li className="text-gray-700 list-disc text-sm">CSS</li>
            <li className="text-gray-700 list-disc text-sm">HTML</li>
            <li className="text-gray-700 list-disc text-sm">
              <FontAwesomeIcon icon={faReact} /> React
            </li>
            <li className="text-gray-700 list-disc text-sm">
              <img
                className="w-[15px] inline"
                src="https://tailwindcss.com/favicons/favicon.ico?v=3"
                alt="Tailwind"
              />{" "}
              Tailwind
            </li>
            <li className="text-gray-700 list-disc text-sm">
              <FontAwesomeIcon icon={faVuejs} /> Vue.js
            </li>
            <li className="text-gray-700 list-disc text-sm">
              <FontAwesomeIcon icon={faNodeJs} /> Node.js
            </li>
            <li className="text-gray-700 list-disc text-sm">
              <img
                className="w-[15px] inline"
                src="https://orm.drizzle.team/favicon.ico"
                alt="Drizzle"
              />{" "}
              Drizzle
            </li>
            <li className="text-gray-700 list-disc text-sm">
              <img
                className="w-[15px] inline"
                src="https://sequelize.org/favicon.ico"
                alt=""
              />{" "}
              Sequelize
            </li>
            <li className="text-gray-700 list-disc text-sm">SQL</li>
            <li className="text-gray-700 list-disc text-sm">Rest API</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
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
          <div className="text-center">
            <Button className="border-l-0 text-xs hover:text-sky-400 text-gray-700 rounded-none border-b-0 border-r-0">
              Download Resume
            </Button>
            <Button className="border-b-0 text-xs hover:text-sky-400 text-gray-700 rounded-none border-r-0">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
