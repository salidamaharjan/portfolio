import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../component/ui/Button";
import { faVuejs } from "@fortawesome/free-brands-svg-icons/faVuejs";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
function AboutMe() {
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
          <div>About Me</div>
          <div className="font-light text-gray-700">
            I am Salida Maharjan, full stack web developer. I am from Minnesota,
            USA. Highly motivated coding boot camp graduate with a passion in
            web development.
          </div>
        </div>
        <div className="flex-1 text-lg text-blue-900">
          Skills
          <ul className="md:columns-3 columns-2 text-gray-700 list-disc ml-4 pt-2 text-lg font-light">
            <li>
              <FontAwesomeIcon icon={faJs} /> JavaScript
            </li>
            <li>
              <img
                className="w-[15px] inline"
                src="https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"
                alt="TypeScript"
              />{" "}
              TypeScript
            </li>
            <li>CSS</li>
            <li>HTML</li>
            <li>
              <FontAwesomeIcon icon={faReact} /> React
            </li>
            <li>
              <img
                className="w-[15px] inline"
                src="https://tailwindcss.com/favicons/favicon.ico?v=3"
                alt="Tailwind"
              />{" "}
              Tailwind
            </li>
            <li>
              <FontAwesomeIcon icon={faVuejs} /> Vue.js
            </li>
            <li>
              <FontAwesomeIcon icon={faNodeJs} /> Node.js
            </li>
            <li>
              <img
                className="w-[15px] inline"
                src="https://orm.drizzle.team/favicon.ico"
                alt="Drizzle"
              />{" "}
              Drizzle
            </li>
            <li>
              <img
                className="w-[15px] inline"
                src="https://sequelize.org/favicon.ico"
                alt=""
              />{" "}
              Sequelize
            </li>
            <li>SQL</li>
            <li>Rest API</li>
          </ul>
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
