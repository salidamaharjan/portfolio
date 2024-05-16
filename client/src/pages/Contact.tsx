import Input from "../component/ui/Input";
import Label from "../component/ui/Label";

function Contact() {
  return (
    <div>
      <div className="text-blue-900 text-lg text-center font-bold mb-2">
        Contact Me
      </div>
      <div className="flex flex-col items-center gap-4">
        <div>Phone: 999-000-0000</div>
        <div>
          Linked In:{" "}
          <a
            href="https://www.linkedin.com/in/salida-maharjan-6381b9173/"
            target="_blank"
            className="border-b-2 hover:text-blue-500"
          >
            Connect with Me
          </a>
        </div>
        <div className="flex flex-col border shadow-sm p-4 border-gray-400 w-[350px] md:w-[500px] text-center rounded-md">
          Email Me
          <div className="flex flex-col mt-2 gap-4 ">
            <div className="flex flex-col justify-evenly gap-4 md:flex-row">
              <Label>
                <Input
                  className="border-gray-300 "
                  type="text"
                  placeholder="Full Name"
                />
              </Label>
              <Label>
                <Input
                  className="border-gray-300"
                  type="text"
                  placeholder="Email Address"
                />
              </Label>
            </div>
            <Label>
              <Input
                className="border-gray-300"
                placeholder="Your Message"
                type="Text"
              />
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
