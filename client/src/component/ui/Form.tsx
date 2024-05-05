import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

function Form() {
  return (
    <div className="flex justify-center">
      <div className=" flex flex-col gap-4 border rounded-md p-6 min-w-[350px] items-center border-gray-500">
        <div>
          <Label className="text-gray-800">
            {" "}
            Username: {" "}
            <Input placeholder="username" type="text" />
          </Label>
        </div>
        <div>
          <Label className="text-gray-800">
            {" "}
            Password:{" "}
            <Input placeholder="password" type="text" />
          </Label>
        </div>
        <Button>Login</Button>
      </div>
    </div>
  );
}
export default Form;
