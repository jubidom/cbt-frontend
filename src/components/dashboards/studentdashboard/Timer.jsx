import { useEffect } from "react";
import { useState } from "react";

function Timer({ duration = 90, className }) {
  const [countDown, setCountDown] = useState(duration);

  // const hour = countDown ;
  const mins = Math.floor(countDown / 60) || "00";
  const secs = countDown % 60 || "0";

  useEffect(() => {
    const intervalID = setInterval(
      () =>
        setCountDown((prev) => {
          if (prev <= 1) {
            clearInterval(intervalID);
            return;
          }
          return prev - 1;
        }),
      1000
    );

    return () => clearInterval(intervalID);
  }, [duration]);
  return (
    <section className={className}>{`${mins} : ${
      secs < 10 ? `0${secs}` : secs
    }`}</section>
  );
}

export default Timer;
