import Button from "../component/ui/Button";
import { useNavigate } from "react-router-dom";
function EditPortfolio() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        className="bg-blue-600 text-white"
        onClick={() => navigate("/portfolio")}
      >
        Go Back
      </Button>
    </>
  );
}
export default EditPortfolio;
