import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import formImage from "../assets/formImage.jpg";

function Login() {
  const [activeTab, setActiveTab] = useState("student");
  //prettier-ignore
  const [studentLogins, setStudentLogins] = useState({ email: "", password: "" });
  const [tutorLogins, setTutorLogins] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = function (e, type) {
    const { name, value } = e.target;
    if (type === "student") {
      setStudentLogins({ ...studentLogins, [name]: value });
    } else setTutorLogins({ ...tutorLogins, [name]: value });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    const userData = activeTab === "student" ? studentLogins : tutorLogins;

    const loginSuccess = await dispatch(login(userData));
    if (login.fulfilled.match(loginSuccess)) {
      navigate("/dashboard");
    }

    setStudentLogins({ email: "", password: "" });
    setTutorLogins({ email: "", password: "" });
  };

  return (
    <section className="min-h-dvh max-h-fit flex  justify-center bg-white">
      <div className="hidden md:block w-2/4">
        <img src={formImage} alt="" className="block h-full object-fill" />
      </div>
      <div className=" w-full md:w-2/4 py-[90px] px-6 md:px-16">
        <div className="flex flex-col mb-8 gap-4">
          <h1 className="font-bold text-xl">Login</h1>
          <div className="flex items-center gap-4 text-sm">
            <button
              type="button"
              className={`rounded-full px-8 py-1.5 min-w-32 ${
                activeTab === "student"
                  ? " bg-secondary text-white"
                  : "border border-secondary text-secondary"
              }`}
              onClick={() => setActiveTab("student")}
            >
              Student
            </button>
            <button
              type="button"
              className={`rounded-full px-8 py-1.5 min-w-32 ${
                activeTab === "tutor"
                  ? "bg-secondary text-white"
                  : "border border-secondary text-secondary"
              }`}
              onClick={() => setActiveTab("tutor")}
            >
              Tutor
            </button>
          </div>
          <p className="text-slate-400 text-sm">Enter your Details below</p>
        </div>
        <form
          action=""
          method="POST"
          className="flex flex-col gap-8 w-full h-fit"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <input
              type="email"
              name="email"
              id={`${activeTab}-email`}
              value={
                activeTab === "student"
                  ? studentLogins.email
                  : tutorLogins.email
              }
              placeholder={
                activeTab === "student" ? "Student's Email" : "Tutor's Email"
              }
              className="w-full px-4 py-2 min-h-11 rounded-xl overflow-hidden border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
              required
              onChange={(e) => handleChange(e, activeTab)}
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              name="password"
              id={`${activeTab}-password`}
              value={
                activeTab === "student"
                  ? studentLogins.password
                  : tutorLogins.password
              }
              placeholder={
                activeTab === "student"
                  ? "Student's Password"
                  : "Tutor's Password"
              }
              className="w-full px-4 py-2 min-h-11 rounded-xl overflow-hidden border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
              required
              onChange={(e) => handleChange(e, activeTab)}
            />
          </div>
          <button
            type="submit"
            className="inline-block px-4 py-2 min-h-11 text-center font-semibold bg-secondary  text-white rounded-xl mt-6"
          >
            {activeTab === "student" ? "Login as Student" : "Login as Tutor"}
          </button>
          <p className="text-sm">
            Don't Have an Account?{" "}
            <Link to="/signup" className="text-secondary inline-block ml-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
