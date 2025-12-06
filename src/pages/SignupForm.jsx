import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../auth/authSlice";
import { Link, useNavigate } from "react-router-dom";


function SignupForm({ width }) {
  const [studentSignup, setStudentSignup] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    photo: null,
    nin: "",
    dob: "",
    department: "",
    level: "",
    nationality: "",
    address: "",
  });
  const [adminSignup, setAdminSignup] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [activeTab, setActiveTab] = useState("student");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetPhotoField = useRef(null);

  const handleStudentChange = function (e) {
    const { name, value } = e.target;
    setStudentSignup({ ...studentSignup, [name]: value });
  };

  const handleAdminChange = function (e) {
    const { name, value } = e.target;
    setAdminSignup({ ...adminSignup, [name]: value });
  };

  const handlePhotoField = function (e) {
    const { name } = e.target;
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/"))
      setStudentSignup({ ...studentSignup, [name]: file });
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    const userData = activeTab === "student" ? studentSignup : adminSignup;

    try {
      await dispatch(signup(userData)).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
    }

    if (resetPhotoField.current) {
      resetPhotoField.current.value = "";
    }
    setStudentSignup({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
      photo: null,
      nin: "",
      dob: "",
      department: "",
      regNum: "",
      level: "",
      nationality: "",
      address: "",
    });

    setAdminSignup({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  const style = `overflow-hidden bg-white shadow-md pt-2 pb-8 lg:px-10 px-6 lg:w-9/12 w-full m-auto rounded-lg`;
  return (
    <section className={style}>
      <div className="mb-6 mt-2">
        <h1 className="text-3xl font-bold text-gray-600 my-8">Sign Up</h1>
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
        <p className="text-slate-400 text-md mt-4">Enter your details below</p>
      </div>
      <form className="" onSubmit={handleSubmit}>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 mb-6">
          <label htmlFor="firstName" className="flex flex-col gap-2 flex-grow">
            FIRST NAME
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={
                activeTab === "student"
                  ? studentSignup.firstName
                  : adminSignup.firstName
              }
              onChange={
                activeTab === "student"
                  ? handleStudentChange
                  : handleAdminChange
              }
              autoFocus
              required
              placeholder="First Name"
              className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            />
          </label>
          <label htmlFor="middleName" className="flex flex-col gap-2 flex-grow">
            MIDDLE NAME
            <input
              type="text"
              name="middleName"
              id="middleName"
              value={
                activeTab === "student"
                  ? studentSignup.middleName
                  : adminSignup.middleName
              }
              onChange={
                activeTab === "student"
                  ? handleStudentChange
                  : handleAdminChange
              }
              required
              placeholder="Middle Name"
              className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            />
          </label>
          <label htmlFor="lastName" className="flex flex-col gap-2 flex-grow">
            LAST NAME
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={
                activeTab === "student"
                  ? studentSignup.lastName
                  : adminSignup.lastName
              }
              onChange={
                activeTab === "student"
                  ? handleStudentChange
                  : handleAdminChange
              }
              required
              placeholder="Last Name"
              className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
            />
          </label>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 mb-6">
          <label htmlFor="email" className="flex flex-col gap-2 flex-grow">
            EMAIL
            <input
              type="email"
              name="email"
              value={
                activeTab === "student"
                  ? studentSignup.email
                  : adminSignup.email
              }
              id="email"
              onChange={
                activeTab === "student"
                  ? handleStudentChange
                  : handleAdminChange
              }
              required
              placeholder="Email"
              className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary flex-grow"
            />
          </label>
          <label htmlFor="password" className="flex flex-col gap-2 flex-grow">
            PASSWORD
            <input
              type="password"
              name="password"
              value={
                activeTab === "student"
                  ? studentSignup.password
                  : adminSignup.password
              }
              id="password"
              onChange={
                activeTab === "student"
                  ? handleStudentChange
                  : handleAdminChange
              }
              required
              placeholder="Password"
              className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary flex-grow"
            />
          </label>
          <label
            htmlFor="confirmPassword"
            className="flex flex-col gap-2 flex-grow"
          >
            CONFIRM PASSWORD
            <input
              type="password"
              name="confirmPassword"
              value={
                activeTab === "student"
                  ? studentSignup.confirmPassword
                  : adminSignup.confirmPassword
              }
              id="confirmPassword"
              onChange={
                activeTab === "student"
                  ? handleStudentChange
                  : handleAdminChange
              }
              required
              placeholder="Password"
              className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary flex-grow"
            />
          </label>

          <label htmlFor="phone" className="flex flex-col gap-2 flex-grow">
            PHONE
            <input
              type="tel"
              name="phone"
              value={
                activeTab === "student"
                  ? studentSignup.phone
                  : adminSignup.phone
              }
              onChange={
                activeTab === "student"
                  ? handleStudentChange
                  : handleAdminChange
              }
              required
              id="phone"
              placeholder="Phone Number"
              className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary flex-grow"
            />
          </label>

          {activeTab === "student" && (
            <>
              <label
                htmlFor="department"
                className="flex flex-col gap-2 flex-grow"
              >
                DEPARTMENT
                <select
                  name="department"
                  id="department"
                  value={studentSignup.department}
                  onChange={handleStudentChange}
                  required
                  className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                >
                  <option value="">Department</option>
                  <option value="science">Sciences</option>
                  <option value="arts">Arts</option>
                </select>
              </label>
              <label
                htmlFor="regnumber"
                className="flex flex-col gap-2 flex-grow"
              >
                REG NUMBER
                <input
                  type="text"
                  name="regNum"
                  value={studentSignup.regNum}
                  onChange={handleStudentChange}
                  id="regNum"
                  placeholder="Reg Number"
                  required
                  className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary flex-grow"
                />
              </label>
            </>
          )}
        </div>
        {activeTab === "student" && (
          <>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 mb-6">
              <div className="flex flex-col gap-2 flex-grow">
                <span htmlFor="">GENDER</span>
                <div className="flex flex-grow lg:gap-2 gap-4">
                  <label
                    htmlFor="male"
                    className="flex items-center gap-2 border p-2 rounded-xl bg-primary text-secondary shadow-sm w-40 border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  >
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      onChange={handleStudentChange}
                      checked={studentSignup.gender === "male"}
                    />
                    Male
                  </label>
                  <label
                    htmlFor="female"
                    className="flex items-center gap-2 border p-2 rounded-xl bg-primary text-secondary shadow-sm w-40 border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  >
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      onChange={handleStudentChange}
                      checked={studentSignup.gender === "female"}
                    />
                    Female
                  </label>
                </div>
              </div>

              <label htmlFor="nin" className="flex flex-col gap-2 flex-grow">
                NIN
                <input
                  type="number"
                  name="nin"
                  id="nin"
                  value={studentSignup.nin}
                  onChange={handleStudentChange}
                  required
                  placeholder="National ID Number (NIN)"
                  className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                />
              </label>

              <label htmlFor="photo" className="flex flex-col gap-2 flex-grow">
                UPLOAD PHOTO
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  accept=".jpg, .jpeg, .png, .gif"
                  required
                  onChange={handlePhotoField}
                  ref={resetPhotoField}
                  className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
                />
              </label>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 mb-6">
              <label htmlFor="dob" className="flex flex-col gap-2 flex-grow">
                DOB
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={studentSignup.dob}
                  onChange={handleStudentChange}
                  className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  required
                />
              </label>

              <label htmlFor="level" className="flex flex-col gap-2 flex-grow">
                LEVEL
                <select
                  name="level"
                  id="level"
                  value={studentSignup.level}
                  onChange={handleStudentChange}
                  className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                >
                  <option value="">Class</option>
                  <option value="ss1">SS1</option>
                  <option value="ss2">SS2</option>
                  <option value="ss3">SS3</option>
                </select>
              </label>

              <label
                htmlFor="nationality"
                className="flex flex-col gap-2 flex-grow"
              >
                NATIONALITY
                <select
                  name="nationality"
                  id="nationality"
                  value={studentSignup.nationality}
                  onChange={handleStudentChange}
                  className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                >
                  <option value="">Nationality</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="ghana">Ghana</option>
                  <option value="rwanda">Rwanda</option>
                </select>
              </label>
            </div>
            <label htmlFor="address" className="flex flex-col gap-2">
              ADDRESS
              <textarea
                name="address"
                id="address"
                value={studentSignup.address}
                onChange={
                  activeTab === "student"
                    ? handleStudentChange
                    : handleAdminChange
                }
                className="p-2 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                rows="7"
                required
              ></textarea>
            </label>
          </>
        )}
        <button
          type="submit"
          className="inline-block px-4 py-2 min-h-11 text-center font-semibold bg-secondary  text-white rounded-xl my-6"
        >
          {activeTab === "student" ? "Student Signup" : "Admin Signup"}
        </button>
        <p className="text-sm">
          Already have an Account?
          <Link to="/login" className="text-secondary inline-block ml-2">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}
export default SignupForm;
