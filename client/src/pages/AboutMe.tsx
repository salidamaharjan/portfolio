import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function AboutMe() {
  return (
    <div className="text-blue-900 font-bold">
      <div className="flex gap-6">
        <div className="flex flex-col gap-1">
          <img
            className="w-[35dvw] h-[60dvh] border-1 rounded-md"
            src="/images/user.jpg"
            alt="User's Image"
          />
          <h1 className="text-sm text-center">Salida Maharjan</h1>
          <h2 className="text-xs text-black text-center">
            Full Stack Developer
          </h2>
          <div className="flex gap-2 justify-center">
            <a href="https://github.com/salidamaharjan" target="_blank">
              <FontAwesomeIcon icon={faGithub} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/salida-maharjan-6381b9173/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/tweeter?lang=en">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div>About Me</div>
      </div>
    </div>
  );
}
export default AboutMe;
