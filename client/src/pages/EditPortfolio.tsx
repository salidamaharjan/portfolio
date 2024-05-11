import Button from "../component/ui/Button";
import { useNavigate } from "react-router-dom";
function EditPortfolio() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2">
      <Button
        className="bg-blue-600 text-white"
        onClick={() => navigate("/portfolio")}
      >
        Go Back
      </Button>
    </div>
  );
}
export default EditPortfolio;
