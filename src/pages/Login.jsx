import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../auth/authSlice.js";
import formImage from "../assets/formImage.jpg";
import welcome_logo from "../assets/welcome_logo.jpg";
import schlogo from "../assets/sch_logo.jpg";
import purplelogo from "../assets/purple_bg.jpg";

function Login() {
  const [activeTab, setActiveTab] = useState("student");
  //prettier-ignore
  const [studentLogin, setStudentLogin] = useState({ email: "", password: "" });
  const [adminLogin, setAdminLogin] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = function (e, type) {
    const { name, value } = e.target;
    if (type === "student") {
      setStudentLogin({ ...studentLogin, [name]: value });
    } else setAdminLogin({ ...adminLogin, [name]: value });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    // const userData = activeTab === "student" ? studentLogin : adminLogin;

    // const loginSuccess = await dispatch(login(userData));
    // if (login.fulfilled.match(loginSuccess)) {
    //   navigate("/dashboard");
    // }
    if (activeTab === "student" && studentLogin.email !== "") {
      navigate("/studentdashboard");
    } else {
      navigate("/admindashboard");
    }

    setStudentLogin({ email: "", password: "" });
    setAdminLogin({ email: "", password: "" });
  };

  return (
    <section className="h-dvh min-h-dvh flex bg-white  ">
      {/* py-20 items-center*/}
      <div className="hidden lg:flex w-2/4 h-full">
        {/* lg:block w-2/4 bg-[#f1f1f1]*/}
        {/* <img src={formImage} alt="" className="block h-full object-contain" /> */}
        {/* <img
          src={welcome_logo}
          alt=""
          className="block h-full flex-grow object-cover"
        /> */}
        {/* <img
          src={welcome_logo}
          alt=""
          className="block h-full flex-grow object-cover"
        /> */}
        {/* <img
          src={schlogo}
          alt=""
          className="block h-full flex-grow object-cover"
        /> */}
        {/* <img
          src={schlogo}
          alt=""
          className="block h-full flex-grow object-cover"
        /> */}
        <img
          src={purplelogo}
          alt=""
          className="block h-full flex-grow object-cover"
        />
      </div>

      <div className="w-full lg:w-2/4 px-6 md:px-16 flex flex-col justify-center h-full">
        {/* py-[72px] bg-[#f1f1f1]*/}
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
                activeTab === "admin"
                  ? "bg-secondary text-white"
                  : "border border-secondary text-secondary"
              }`}
              onClick={() => setActiveTab("admin")}
            >
              Admin
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
                activeTab === "student" ? studentLogin.email : adminLogin.email
              }
              placeholder={
                activeTab === "student" ? "Student's Email" : "Admin's Email"
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
                  ? studentLogin.password
                  : adminLogin.password
              }
              placeholder={
                activeTab === "student"
                  ? "Student's Password"
                  : "Admin's Password"
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
            {activeTab === "student" ? "Login Student" : "Login Admin"}
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
