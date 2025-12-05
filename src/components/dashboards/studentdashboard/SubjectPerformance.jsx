import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RxCaretRight } from "react-icons/rx";

function SubjectPerformance() {
  const user = useSelector((state) => state.auth);
  return (
    <main className="flex flex-col px-2 py-3">
      <form className="py-4 flex gap-5 justify-between items-center mb-4">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search exam title"
          className="hidden flex-grow lg:flex w-fit px-3 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary outline-none"
        />
        <select
          name="subjects"
          id="subjects"
          className="w-fit flex-grow px-3 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary outline-none"
        >
          <option value="">Subject</option>
          <option value="maths">Mathematics</option>
          <option value="english">English</option>
          <option value="physics">Physics</option>
          <option value="chemistry">Chemistry</option>
          <option value="biology">Biology</option>
          <option value="geography">Geography</option>
        </select>
        <select
          name="status"
          id="status"
          className="w-fit flex-grow px-3 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary outline-none"
        >
          <option value="">Status</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
        </select>
        <button className="bg-secondary text-slate-50 px-3 py-2.5 flex-grow rounded-lg text-sm">
          Clear
        </button>
      </form>
      <div className="overflow-x-auto block md:table w-full bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3 border">Subjects</th>
              <th className="p-3 border text-center">Grades</th>
              <th className="p-3 border text-center">Status</th>
              <th className="p-3 border text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">
                <h2 className="font-bold text-sm">Biology</h2>
                <p className="text-xs text-gray-500">2025-02-14</p>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-semibold">82%</h2>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-semibold">Pass</h2>
              </td>
              <td className="p-3 border text-green-600 font-semibold text-center">
                <div className="flex justify-center">
                  <Link
                    to="biology"
                    className="text-xs flex items-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg"
                  >
                    <span>Details</span>
                    <RxCaretRight />
                  </Link>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="p-3 border">
                <h2 className="font-bold text-sm">Chemistry</h2>
                <p className="text-xs text-gray-500">2025-02-12</p>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-semibold">61%</h2>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-semibold">Fail</h2>
              </td>
              <td className="p-3 border text-green-600 font-semibold">
                <div className="flex justify-center">
                  <Link
                    to="biology"
                    className="text-xs flex items-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg"
                  >
                    <span>Details</span>
                    <RxCaretRight />
                  </Link>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="p-3 border">
                <h2 className="font-bold text-sm">Mathematics</h2>
                <p className="text-xs text-gray-500">2025-02-10</p>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-semibold">74%</h2>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-semibold">pass</h2>
              </td>
              <td className="p-3 border text-green-600 font-semibold">
                <div className="flex justify-center">
                  <Link
                    to="biology"
                    className="text-xs flex items-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg"
                  >
                    <span>Details</span>
                    <RxCaretRight />
                  </Link>
                </div>
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="p-3 border">
                <h2 className="font-bold text-sm">Geography</h2>
                <p className="text-xs text-gray-500">2025-02-14</p>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-semibold">92%</h2>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-semibold">Fail</h2>
              </td>
              <td className="p-3 border text-green-600 font-semibold">
                <div className="flex justify-center">
                  <Link
                    to="biology"
                    className="text-xs flex items-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg"
                  >
                    <span>Details</span>
                    <RxCaretRight />
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">
                <h2 className="font-bold text-sm">Agriculture</h2>
                <p className="text-xs text-gray-500">2025-02-14</p>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-bold text-sm">78%</h2>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-bold text-sm">Pass</h2>
              </td>
              <td className="p-3 border text-green-600 font-semibold">
                <div className="flex justify-center">
                  <Link
                    to="biology"
                    className="text-xs flex items-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg"
                  >
                    <span>Details</span>
                    <RxCaretRight />
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">
                <h2 className="font-bold text-sm">Physics</h2>
                <p className="text-xs text-gray-500">2025-02-14</p>
              </td>
              <td className="p-3 border text-center">
                <h2 className="font-bold text-sm">90%</h2>
              </td>
              <td className="p-3 border text-center">
                <h2 className="text-sm font-bold">Pass</h2>
              </td>
              <td className="p-3 border text-green-600 font-semibold">
                <div className="flex justify-center">
                  <Link
                    to="biology"
                    className="text-xs flex items-center gap-1 bg-secondary text-slate-50 px-2 py-1 rounded-lg"
                  >
                    <span>Details</span>
                    <RxCaretRight />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex text-left flex-col gap-5"></div>
    </main>
  );
}

export default SubjectPerformance;
