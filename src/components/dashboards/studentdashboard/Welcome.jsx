import { useSelector } from "react-redux";
import { formatDate } from "../../../utils/formatDate";

const currentDate = formatDate();

function Welcome({ className }) {
  const user = useSelector((state) => state.auth.user);

  return (
    <section className={className}>
      <p className="">{currentDate}</p>
      <div className="mt-10 flex-1">
        <h1 className=" font-bold text-gray-800 lg:text-2xl">
          Welcome back, {user?.name || "Vincent"} !
        </h1>
        <small className="text-gray-600 text-sm">
          Always stay updated in your student portal
        </small>
      </div>
    </section>
  );
}

export default Welcome;
