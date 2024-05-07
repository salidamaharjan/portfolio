import { get } from "../lib/http";
function Portfolio() {
  async function fetchEducation() {
    try {
      const educations = await get("http://localhost:3001/api/educations");
      console.log("educations", educations);
    } catch (err) {
      console.log("err", err);
    }
  }
  return (
    <div className="font-bold text-red-600">
      PORTFOLIO
      <button onClick={fetchEducation}>Click</button>
    </div>
  );
}

export default Portfolio;
