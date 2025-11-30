import Button from "../../Button";

function History({ className }) {
  return (
    <section className={className}>
      <h3 className="text-xl font-semibold">Student's Performance</h3>
      <div action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-3 w-full flex items-center gap-1 justify-between">
          <p className="flex items-center gap-1">
            <strong className=" text-green-600 font-semibold">Passed:</strong>{" "}
            <strong className="text-gray-700">3</strong>
          </p>
          <p className="flex items-center gap-1">
            <strong className=" text-red-600 font-semibold">Fail:</strong>{" "}
            <strong className="text-gray-700">1</strong>
          </p>
          <p className="flex items-center gap-1">
            <strong className=" text-yellow-600 font-semibold">Pending:</strong>
            <strong className="text-gray-700">2</strong>
          </p>
        </div>

        <select
          name="select"
          id="select"
          className="border rounded-lg p-3 w-full"
        >
          <option value="">All Subjects</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="overflow-x-auto block md:table w-full">
        <table className="w-full border-collapse">
          <thead className="hover:bg-gray-200">
            <tr className="bg-gray-50 text-left">
              <th className="p-3 border">Subject</th>
              <th className="p-3 border">Department</th>
              <th className="p-3 border">Score</th>
              <th className="p-3 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Mathematics</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">English</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">49%</td>
              <td className="p-3 border text-red-600 font-semibold">Fail</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Chemistry</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">94%</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Physics</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">Nil</td>
              <td className="p-3 border text-yellow-600 font-semibold">
                Pending
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Biology</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">94%</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Agriculture</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">Nil</td>
              <td className="p-3 border text-yellow-600 font-semibold">
                Pending
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* pagination section */}
      <div className="flex items-center justify-evenly pt-4">
        <Button className="bg-secondary px-4 py-2 rounded-lg text-white">
          Prev
        </Button>
        <Button className="bg-secondary px-4 py-2 rounded-lg text-white">
          Next
        </Button>
      </div>
    </section>
  );
}

export default History;
