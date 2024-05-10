import EducationForm from "../component/EducationForm";

export default function Misc() {
  return <Dialog />;
}

function Dialog() {
  return (
    <div>
      <div className="__overlay flex items-center justify-center bg-gray-400/65 top-0 left-0 h-screen w-screen fixed">
        <div className="__card flex flex-col  bg-opacity-100 rounded-md bg-white absolute">
          <EducationForm />
        </div>
      </div>
    </div>
  );
}
