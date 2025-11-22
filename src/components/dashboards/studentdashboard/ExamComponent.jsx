import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {} from "react-icons/fa";
import Timer from "./Timer";
import Button from "../../Button";

const labelStyle = `flex items-center gap-2`;

function ExamComponent() {
  const [startExam, setStartExam] = useState(false);
  return (
    <main className="min-h-[calc(100vh_-_76px)] flex">
      {!startExam ? (
        <section className="w-full flex flex-col gap-4 items-center justify-center">
          <p className="text-center mb-4">
            Please on clicking the start button, the timer cannot be paused.
          </p>
          <Button
            onClick={() => setStartExam(true)}
            className="block bg-secondary px-8 py-2 rounded-md cursor-pointer text-white"
          >
            Start
          </Button>
        </section>
      ) : (
        <section className="flex flex-col h-full">
          <Timer className="max-w-fit ml-auto mt-4 bg-card px-3 py-2 shadow-[0.4rem_0.4rem_0.6rem_0_rgb(225,226,228),-0.3rem_-0.3rem_1rem_0_rgb(255,255,255)]" />
          <aside className="h-full flex-grow">
            <div className="mb-8 mt-6">
              <h1 className="font-bold text-2xl text-[#333] mb-4">
                Question 1
              </h1>
              <p className="lg:text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis exercitationem corporis nesciunt delectus architecto
                assumenda beatae sapiente explicabo earum quidem officiis quo
                nihil quisquam obcaecati labore, repudiandae possimus qui
                laborum!
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              <li>
                <label className={labelStyle}>
                  <input type="radio" name="sex" id="boy" value="boy" />
                  Boy
                </label>
              </li>
              <li>
                <label className={labelStyle}>
                  <input type="radio" name="sex" id="girl" value="girl" />
                  Girl
                </label>
              </li>
              <li>
                <label className={labelStyle}>
                  <input type="radio" name="sex" id="man" value="man" />
                  Man
                </label>
              </li>
              <li>
                <label className={labelStyle}>
                  <input type="radio" name="sex" id="woman" value="woman" />
                  Woman
                </label>
              </li>
              <li>
                <label className={labelStyle}>
                  <input type="radio" name="sex" id="animal" value="animal" />
                  Animals
                </label>
              </li>
            </ul>
          </aside>
          <div className="flex justify-evenly py-2 gap-36 mt-16">
            <Button className="lg:py-3 px-4 py-2 lg:px-8 bg-secondary rounded-md shadow-md min-w-12">
              <FaArrowLeft className="text-slate-50" />
            </Button>
            <Button className="lg:py-3 px-4 py-2 lg:px-8 bg-secondary rounded-md shadow-md min-w-12 text-slate-50">
              <FaArrowRight />
            </Button>
          </div>
        </section>
      )}
    </main>
  );
}

export default ExamComponent;
