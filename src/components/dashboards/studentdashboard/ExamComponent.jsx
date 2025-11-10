import { useState } from "react";
import Timer from "./Timer";
import Button from "../../Button";

const labelStyle = `flex items-center gap-2`;

function ExamComponent() {
  const [startExam, setStartExam] = useState(false);
  return (
    <main className="h-full flex ">
      {!startExam ? (
        <section className="h-full flex-grow flex flex-col gap-4 items-center justify-center">
          <p>Please on click the start button, the timer cannot be paused.</p>
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
              <p>Question 1</p>
              <p>
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
          <div className="">
            <Button>Previous</Button>
            <Button>Next</Button>
          </div>
        </section>
      )}
    </main>
  );
}

export default ExamComponent;
