import { Link, Outlet } from "react-router-dom";

function ExamsHistory() {
  return (
    <section>
      <header className="flex flex-col lg:flex-row gap-4 justify-between py-3">
        {/* <div className=""> */}
        <div className="flex  justify-between gap-6">
          <h1 className="font-bold lg:text-2xl text-lg">Exam History</h1>
          <button className="font-semibold cursor-pointer bg-secondary text-white py-0.5 px-2 rounded-lg text-sm">
            Export PDF
          </button>
        </div>
        <p className="text-sm">
          Review past attempts, analytics and question-by question feedback
        </p>
        {/* </div> */}
      </header>
      <Outlet />
    </section>
  );
}

export default ExamsHistory;
