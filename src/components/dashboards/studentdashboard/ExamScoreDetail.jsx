import { useNavigate } from "react-router-dom";
import Button from "../../Button";

function ExamScoreDetail() {
  const navigate = useNavigate();

  return (
    <section>
      <header className="flex gap-12 items-center mb-6 py-4">
        <Button
          onClick={() => navigate(-1)}
          className="shadow-lg bg-secondary text-slate-50 inline-block px-4 py-1 rounded-lg"
        >
          Back
        </Button>
        <h1 className="text-lg font-semibold lg:font-bold lg:text-2xl ">
          Biology Mock Test
        </h1>
      </header>
      <main className="">
        <div className="grid grid-cols-3 gap-4">
          <div className="border border-slate-300 py-4 px-4 flex flex-col gap-1 flex-grow rounded-2xl">
            <p className="text-slate-400">Score</p>
            <h1 className="font-semibold lg:text-2xl text-lg">82%</h1>
          </div>
          <div className="border border-slate-300 py-4 px-4 flex flex-col gap-1 flex-grow rounded-2xl">
            <p className="text-slate-400">Status</p>
            <h1 className="font-semibold lg:text-2xl text-lg">Passed</h1>
          </div>
          <div className="border border-slate-300 py-4 px-4 flex flex-col gap-1 flex-grow rounded-2xl">
            <p className="text-slate-400">Time</p>
            <h1 className="font-semibold lg:text-2xl text-lg">45mins</h1>
          </div>
        </div>

        <div className="mt-7">
          <h1 className="text-2xl lg:font-bold font-semibold mb-2">
            Quick Insights
          </h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="border border-slate-300 py-4 px-4 flex flex-col gap-1 flex-grow rounded-2xl">
              <p className="text-slate-400">Questions</p>
              <h1 className="font-semibold lg:text-2xl text-lg">3</h1>
            </div>
            <div className="border border-slate-300 py-4 px-4 flex flex-col gap-1 flex-grow rounded-2xl">
              <p className="text-slate-400">Correct</p>
              <h1 className="font-semibold lg:text-2xl text-lg">2</h1>
            </div>
            <div className="border border-slate-300 py-4 px-4 flex flex-col gap-1 flex-grow rounded-2xl">
              <p className="text-slate-400">Wrong</p>
              <h1 className="font-semibold lg:text-2xl text-lg">1</h1>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <h1 className="text-2xl lg:font-bold font-semibold mb-2">
            Question Summary
          </h1>
          <div className="">
            <ul className="flex flex-col lg:gap-5 gap-4">
              {/* lg:px-8 px-0 */}
              <li className="flex justify-between border py-2 px-2 rounded-lg">
                <p className="text-lg font-semibold">What is photosynthesis?</p>
                <div className="flex gap-3">
                  <div>
                    <p>
                      Your Answer: <span className="font-semibold">A</span>
                    </p>
                    <p>
                      Correct: <span className="font-semibold ">A</span>
                    </p>
                  </div>
                </div>
                <Button className="shadow-lg bg-secondary text-slate-50 inline-block px-4 py-1 rounded-lg text-sm">
                  Review
                </Button>
              </li>
              <li className="flex justify-between border py-2 px-2 rounded-lg">
                <p className="text-lg font-semibold">What is photosynthesis?</p>
                <div className="flex gap-3">
                  <div>
                    <p>
                      Your Answer: <span className="font-semibold">A</span>
                    </p>
                    <p>
                      Correct: <span className="font-semibold ">A</span>
                    </p>
                  </div>
                </div>
                <Button className="shadow-lg bg-secondary text-slate-50 inline-block px-4 py-1 rounded-lg text-sm">
                  Review
                </Button>
              </li>
              <li className="flex justify-between border py-2 px-2 rounded-lg">
                <p className="text-lg font-semibold">What is photosynthesis?</p>
                <div className="flex gap-3">
                  <div>
                    <p>
                      Your Answer: <span className="font-semibold">A</span>
                    </p>
                    <p>
                      Correct: <span className="font-semibold ">A</span>
                    </p>
                  </div>
                </div>
                <Button className="shadow-lg bg-secondary text-slate-50 inline-block px-4 py-1 rounded-lg text-sm">
                  Review
                </Button>
              </li>
              <li className="flex justify-between border py-2 px-2 rounded-lg">
                <p className="text-lg font-semibold">What is photosynthesis?</p>
                <div className="flex gap-3">
                  <div>
                    <p>
                      Your Answer: <span className="font-semibold">A</span>
                    </p>
                    <p>
                      Correct: <span className="font-semibold ">A</span>
                    </p>
                  </div>
                </div>
                <Button className="shadow-lg bg-secondary text-slate-50 inline-block px-4 py-1 rounded-lg text-sm">
                  Review
                </Button>
              </li>
              <li className="flex justify-between border py-2 px-2 rounded-lg">
                <p className="text-lg font-semibold">What is photosynthesis?</p>
                <div className="flex gap-3">
                  <div>
                    <p>
                      Your Answer: <span className="font-semibold">A</span>
                    </p>
                    <p>
                      Correct: <span className="font-semibold ">A</span>
                    </p>
                  </div>
                </div>
                <Button className="shadow-lg bg-secondary text-slate-50 inline-block px-4 py-1 rounded-lg text-sm">
                  Review
                </Button>
              </li>
              <li className="flex justify-between border py-2 px-2 rounded-lg">
                <p className="text-lg font-semibold">What is photosynthesis?</p>
                <div className="flex gap-3">
                  <div>
                    <p>
                      Your Answer: <span className="font-semibold">A</span>
                    </p>
                    <p>
                      Correct: <span className="font-semibold ">A</span>
                    </p>
                  </div>
                </div>
                <Button className="shadow-lg bg-secondary text-slate-50 inline-block px-4 py-1 rounded-lg text-sm">
                  Review
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}

export default ExamScoreDetail;
