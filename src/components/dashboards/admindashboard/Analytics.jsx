import Button from "../../Button";

function Analytics() {
  return (
    <main>
      {/* Header summary section*/}
      <section className="">
        <h1>Dashboard Overview</h1>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white shadow-lg rounded-xl p-5 border border-slate-300">
            <p className="text-sm text-gray-500">Total Students</p>
            <h1 className="text-3xl font-bold mt-2">50</h1>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-5 border border-slate-300">
            <p className="text-sm text-gray-500">Total Exams</p>
            <h1 className="text-3xl font-bold mt-2">6</h1>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-5 border border-slate-300">
            <p className="text-sm text-gray-500">Pass Rate</p>
            <h1 className="text-3xl font-bold mt-2">98%</h1>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-5 border border-slate-300">
            <p className="text-sm text-gray-500">Fail Rate</p>
            <h1 className="text-3xl font-bold mt-2">2%</h1>
          </div>
        </div>
      </section>
      {/* Charts summary section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-xl p-6 h-72 border flex items-center justify-center">
          <p className="text-gray-400">Line chart showing students' attempts</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 h-72 border flex items-center justify-center">
          <p className="text-gray-400">
            Bar chart showing pass rate by subjects
          </p>
        </div>
      </section>
      {/* Tabular data representation section */}
      <section className="bg-white shadow rounded-xl p-6 border space-y-6">
        <h3 className="text-xl font-semibold">
          Students Details and Performance
        </h3>
        <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for student"
            className="border rounded-lg p-3 w-full"
          />

          <select
            name="select"
            id="select"
            className="border rounded-lg p-3 w-full"
          >
            <option value="">All Students</option>
            <option value="pass">Pass</option>
            <option value="fail">Fail</option>
            <option value="science">Science</option>
            <option value="arts">Arts</option>
          </select>
        </form>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3 border">Student Name</th>
              <th className="p-3 border">Department</th>
              <th className="p-3 border">Recent Score</th>
              <th className="p-3 border text-green-600 font-semibold">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
            </tr>
            <tr>
              <td className="p-3 border">Adamu Isa</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">89%</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
            </tr>
            <tr>
              <td className="p-3 border">Eke Udoji</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">94%</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
            </tr>
          </tbody>
        </table>
        {/* pagination section */}
        <div className="flex items-center justify-between pt-4">
          <Button className="bg-secondary px-4 py-2 rounded-lg text-white">
            Prev
          </Button>
          <Button className="bg-secondary px-4 py-2 rounded-lg text-white">
            Next
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Analytics;
