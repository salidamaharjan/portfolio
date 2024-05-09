import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

function AddForm() {
    return <div className="flex flex-col border shadow-xl border-gray-900 gap-4 rounded-md p-8"> 
       <div className="text-blue-600 text-center text-xl pb-2 font-bold">Add Your Education</div>
       
       <div className="text-center"><Button >Add</Button></div>
     </div>;
   }
   export default AddForm;