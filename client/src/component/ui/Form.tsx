import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

type FormProps = {
  children: string;
};

function Form({ children }: FormProps) {
  function handleLoginCLick() {
    alert("login");
  }
  return (
    <div className="flex flex-col text-2xl font-bold text-blue-600 gap-6 items-center">
      {" "}
      {children}
      <div className=" flex flex-col gap-6 border text-lg rounded-md p-8 sm:min-w-[250px] md:min-w-[350px] lg:min-w-[450px] items-center border-gray-500">
        <div>
          <Label className="text-gray-800">
            {" "}
            Username: <Input placeholder="username" type="text" />
          </Label>
        </div>
        <div>
          <Label className="text-gray-800">
            {" "}
            Password: <Input placeholder="password" type="password" />
          </Label>
        </div>
        <Button onClick={handleLoginCLick}>{children}</Button>
      </div>
    </div>
  );
}
export default Form;
