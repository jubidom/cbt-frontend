import Button from "../../Button";

function Results() {
  return (
    <section className="bg-white shadow rounded-xl p-6 border space-y-6 mb-7">
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
      <div className="overflow-x-auto block md:table w-full">
        <table className="w-full border-collapse">
          <thead className="hover:bg-gray-200">
            <tr className="bg-gray-50 text-left">
              <th className="p-3 border">Names</th>
              <th className="p-3 border">Department</th>
              <th className="p-3 border">Mathematics</th>
              <th className="p-3 border">English</th>
              <th className="p-3 border">Chemistry</th>
              <th className="p-3 border">Physics</th>
              <th className="p-3 border">Biology</th>
              <th className="p-3 border">Agriculture</th>
              <th className="p-3 border">Average</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Print</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border">Science</td>
              <td className="p-3 border">88%</td>
              <td className="p-3 border">98%</td>
              <td className="p-3 border">78%</td>
              <td className="p-3 border">48%</td>
              <td className="p-3 border">68%</td>
              <td className="p-3 border">80%</td>
              <td className="p-3 border">90.10</td>
              <td className="p-3 border text-green-600 font-semibold">Pass</td>
              <td className="p-3 border text-green-600 font-semibold">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Print
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

{
}

export default Results;
