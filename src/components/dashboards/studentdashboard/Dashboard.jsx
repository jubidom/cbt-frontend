import { Calender } from "../../Calender";
import Welcome from "./Welcome";
import History from "./History";

function Dashboard() {
  return (
    <main className="bg-whiteflex flex-col gap-2 py-2">
      <section className="flex flex-col lg:flex-row gap-4 w-full">
        <Welcome className="bg-[#f7afe5] py-4 px-4 flex-1 flex flex-col rounded-lg shadow-md" />
        <Calender className="lg:flex-1 border border-gray-200 py-4 px-4 text-center shadow-md rounded-lg w-full" />
      </section>
      <section className="flex flex-col gap-2 lg:flex-row mt-7">
        <History className="bg-white shadow rounded-xl p-6 border space-y-6 mb-7 w-full" />
      </section>
    </main>
  );
}

export default Dashboard;
