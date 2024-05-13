import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../component/ui/Button";
function AboutMe() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <img
            className="w-[35dvw] h-[60dvh] border-1 rounded-md"
            src="/images/user.jpg"
            alt="User's Image"
          />
          <h1 className="text-sm text-center font-bold text-blue-900">
            Salida Maharjan
          </h1>
          <h2 className="text-xs text-black text-center">
            Full Stack Developer
          </h2>
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
            <a
              className="text-blue-400"
              href="https://twitter.com/tweeter?lang=en"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="text-center">
          <Button className="border-l-0 text-xs hover:text-sky-400 text-gray-700 rounded-none border-b-0 border-r-0">
            Download CV
          </Button>
          <Button className="border-b-0 text-xs hover:text-sky-400 text-gray-700 rounded-none border-r-0">
            Contact Me
          </Button>
        </div>
      </div>
      <div className="text-blue-900 font-bold">About Me</div>
    </div>
  );
}
export default AboutMe;
