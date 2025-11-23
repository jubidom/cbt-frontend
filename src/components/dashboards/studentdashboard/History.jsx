function History({ className }) {
  return (
    <section className={className}>
      <h1 className="mb-4 text-lg font-bold">Subject Status</h1>
      <div className="h-56 overflow-y-auto no-scrollbar">
        <table className="w-full text-left table-auto min-w-max border-separate border-spacing-x-0 border-spacing-y-2 border border-gray-300 rounded-lg py-3 px-2 overflow-y-auto">
          <thead className="">
            <tr>
              <th>Subject</th>
              <th className="text-center">Score</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody className=" ">
            <tr className="bg-[#f4f4f4]">
              <td className="px-2 py-3">Mathematics</td>
              <td className="px-2 py-3">82%</td>
              <td className="text-green-700 font-bold py-1 text-center">
                Pass
              </td>
            </tr>
            <tr className="bg-[#f4f4f4]">
              <td className="px-2 py-3">English</td>
              <td className="px-2 py-3">59%</td>
              <td className="text-red-700 font-bold py-1 text-center">Fail</td>
            </tr>
            <tr className="bg-[#f4f4f4]">
              <td className="px-2 py-3">Chemistry</td>
              <td className="px-2 py-3">Nil</td>
              <td className="text-yellow-600 font-bold py-1 text-center">
                Pass
              </td>
            </tr>
            <tr className="bg-[#f4f4f4]">
              <td className="px-2 py-3">Physics</td>
              <td className="px-2 py-3">92%</td>
              <td className="text-green-700 font-bold py-1 text-center">
                Pass
              </td>
            </tr>
            <tr className="bg-[#f4f4f4]">
              <td className="px-2 py-3">Geography</td>
              <td className="px-2 py-3">Nil</td>
              <td className="text-yellow-600 font-bold py-1 text-center">
                Pending
              </td>
            </tr>
            <tr className="bg-[#f4f4f4]">
              <td className="px-2 py-3">Agriculture</td>
              <td className="px-2 py-3">52%</td>
              <td className="text-red-700 font-bold py-1 text-center">Fail</td>
            </tr>
            <tr className="bg-[#f4f4f4]">
              <td className="px-2 py-3">Economics</td>
              <td className="text-green-700 font-bold text-center">Nil</td>
              <td className="text-yellow-600 font-bold text-center">Pending</td>
            </tr>
            <tr className="bg-[#f4f4f4]">
              <td className="px-2 py-3">Computer</td>

              <td className="text-yellow-600 font-bold text-center">Nil</td>
              <td className="text-yellow-600 font-bold text-center">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default History;
