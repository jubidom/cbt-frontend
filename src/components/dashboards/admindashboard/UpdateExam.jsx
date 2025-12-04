import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../Button";

function UpdateExam() {
  const [updateExam, setUpdateExam] = useState({
    subject: "",
    duration: "",
    description: "",
    department: "",
    exam: null,
  });

  const navigate = useNavigate();
  const { id } = useParams();

  //import the update function from radux store
  return (
    <main>
      <Button
        onClick={() => navigate(-1)}
        className="py-1 px-2 inline-block text-center shadow-md bg-secondary text-white cursor-pointer rounded-md text-sm"
      >
        Back
      </Button>
      <h1 className="text-xl lg:text-2xl font-semibold lg:font-bold text-slate-700 mt-4">
        Update Exam
      </h1>

      <h3 className="text-2xl lg:text-3xl font-semibold lg:font-bold text-slate-700 mt-4">
        {id[0].toUpperCase() + id.slice(1)}
      </h3>
      <form className="mt-9" onSubmit={(e) => e.preventDefault()}>
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(270px,_1fr))] gap-y-10 gap-x-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Exam Information
            </label>
            <input
              type="text"
              value={""}
              placeholder="Exam Subject"
              required
              readOnly
              className="py-2 px-4 rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Duration in Minutes
            </label>
            <input
              type="number"
              value={""}
              placeholder="Exam Subject"
              required
              className="py-2 px-4 rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Exam Description
            </label>
            <input
              type="number"
              value={""}
              placeholder="Exam Subject"
              required
              className="py-2 px-4 rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Department
            </label>
            <select
              name=""
              className="py-2 px-4 rounded-lg shadow-md"
              id=""
              required
              value={""}
              onChange={(e) => setUpdateExam({ ...updateExam })}
            >
              <option value="">Department</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Update Exam File
            </label>
            <input
              type="file"
              className="py-2 px-4 rounded-lg shadow-md"
              name=""
              id=""
              required
              placeholder="Replace Question File"
            />
          </div>
        </section>
        <div className="flex items-center gap-4 mt-10 max-w-fit">
          <Button
            type="submit"
            className="bg-secondary text-white rounded-md cursor-pointer text-center font-semibold shadow-md py-2 px-4 min-h-8"
          >
            Save
          </Button>
          <Button
            type="button"
            className="bg-red-700 text-white rounded-md cursor-pointer text-center font-semibold shadow-md py-2 px-4 min-h-8"
          >
            Delete
          </Button>
          <Button
            type="submit"
            className="bg-slate-700 text-white rounded-md cursor-pointer text-center font-semibold shadow-md py-2 px-4 min-h-8"
          >
            Cancel
          </Button>
        </div>
      </form>
    </main>
  );
}

export default UpdateExam;
