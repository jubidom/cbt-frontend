import { Link } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";

function SubjectPerformance() {
  return (
    <main className="flex flex-col px-2 py-3">
      <form className="py-4 flex gap-5 justify-between items-center">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search exam title"
          className="hidden flex-grow lg:flex w-fit px-3 py-1 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary outline-none"
        />
        <select
          name="subjects"
          id="subjects"
          className="w-fit flex-grow px-3 py-1 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary outline-none"
        >
          <option value="">Subject</option>
          <option value="maths">Maths</option>
          <option value="english">English</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="biology">Biology</option>
          <option value="geography">Geography</option>
        </select>
        <select
          name="status"
          id="status"
          className="w-fit flex-grow px-3 py-1 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary outline-none"
        >
          <option value="">Status</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
        </select>
        <button className="bg-secondary text-slate-50 px-3 py-2 flex-grow rounded-lg text-sm">
          Clear
        </button>
      </form>
      <div className="flex text-left flex-col gap-5">
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <h2 className="font-bold text-sm">Biology</h2>
            <p className="text-xs text-gray-500">2025-02-14</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold">82%</h2>
            <p className="text-xs text-gray-500">Score</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold">Pass</h2>
            <p className="text-xs text-gray-500">Status</p>
          </div>
          <div className="flex justify-end">
            <Link
              to="biology"
              className="text-xs flex items-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg"
            >
              <span>Details</span>
              <RxCaretRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <h2 className="font-bold text-sm">Chemistry</h2>
            <p className="text-xs text-gray-500">2025-02-12</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold">61%</h2>
            <p className="text-xs text-gray-500">Score</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold">Fail</h2>
            <p className="text-xs text-gray-500">Status</p>
          </div>
          <div className="flex justify-end">
            <Link
              to="chemistry"
              className="text-xs flex items-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg"
            >
              <span>Details</span>
              <RxCaretRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="">
            <h2 className="font-bold text-sm">Maths</h2>
            <p className="text-xs text-gray-500">2025-02-10</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold">74%</h2>
            <p className="text-xs text-gray-500">Score</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold">pass</h2>
            <p className="text-xs text-gray-500">Status</p>
          </div>
          <div className="flex justify-end">
            <Link
              to="mathematics"
              className="text-xs flex items-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg"
            >
              <span>Details</span>
              <RxCaretRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="">
            <h2 className="font-bold text-sm">Geography</h2>
            <p className="text-xs text-gray-500">2025-02-14</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold">92%</h2>
            <p className="text-xs text-gray-500">Score</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold">Fail</h2>
            <p className="text-xs text-gray-500">Status</p>
          </div>
          <div className="flex justify-end">
            <Link
              to="geography"
              className="text-xs flex items-center justify-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg w-fit"
            >
              <span>Details</span>
              <RxCaretRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="">
            <h2 className="font-bold text-sm">Physics</h2>
            <p className="text-xs text-gray-500">2025-02-14</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-lg">90%</h2>
            <p className="text-xs text-gray-500">Score</p>
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-lg">pass</h2>
            <p className="text-xs text-gray-500">Status</p>
          </div>
          <div className="flex justify-end">
            <Link
              to="physics"
              className="text-xs flex items-center justify-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg w-fit"
            >
              <span>Details</span>
              <RxCaretRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="">
            <h2 className="font-bold text-sm">Agriculture</h2>
            <p className="text-xs text-gray-500">2025-02-14</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-sm">78%</h2>
            <p className="text-xs text-gray-500">Score</p>
          </div>
          <div className="text-center">
            <h2 className="font-bold text-sm">Pass</h2>
            <p className="text-xs text-gray-500">Status</p>
          </div>
          <div className="flex justify-end">
            <Link
              to="agriculture"
              className="text-xs flex items-center justify-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg"
            >
              <span>Details</span>
              <RxCaretRight />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SubjectPerformance;
