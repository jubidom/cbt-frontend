import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchStudentProfile, updateStudentProfile } from "./studentSlice";
import {
  fetchStudentProfile,
  updateStudentProfile,
} from "../studentdashboard/studentSlice";

import Button from "../../Button";

function UpdateStudent() {
  const [ActiveUpdate, setActiveUpdate] = useState(false);

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.student);

  const btnStyle = "border-gray-300"; // Theme border style

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    nin: "",
    dob: "",
    nationality: "",
    address: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState("");

  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchStudentProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.firstName || "",
        middleName: profile.middleName || "",
        lastName: profile.lastName || "",
        email: profile.email || "",
        phone: profile.phone || "",
        gender: profile.gender || "",
        nin: profile.nin || "",
        dob: profile.dob || "",
        nationality: profile.nationality || "",
        address: profile.address || "",
      });
      setPreview(profile.avatar);
    }
  }, [profile]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));
    if (avatar) form.append("avatar", avatar);
    dispatch(updateStudentProfile(form));
  };

  const startCamera = async () => {
    setShowCamera(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = 300;
    canvas.height = 300;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, 300, 300);
    setPreview(canvas.toDataURL("image/png"));
    setAvatar(null);
    video.srcObject.getTracks().forEach((t) => t.stop());
    setShowCamera(false);
  };

  const deleteAvatar = () => {
    setAvatar(null);
    setPreview("");
  };

  function setUpdate() {
    setActiveUpdate((prev) => !prev);
  }

  return (
    <section className="bg-white shadow rounded-xl p-6 border space-y-6">
      <h3 className="text-xl font-semibold">Manage Students' Account</h3>
      <form action="" className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for student"
          className="border rounded-lg p-3 w-full"
        />

        <select
          name="select"
          id="select"
          className="border rounded-lg p-3 w-full"
        >
          <option value="">All Students</option>
          <option value="pass">Pass</option>
          <option value="fail">Fail</option>
          <option value="science">Science</option>
          <option value="arts">Arts</option>
        </select>
      </form>

      {ActiveUpdate && (
        <div className="mx-auto my-10 shadow-[1px_1px_2px_rgba(0,0,0,0.5),-1px_-1px_2px_rgba(250,250,250,0.5)] rounded-2xl overflow-hidden scroll-smooth">
          {/* AVATAR SECTION */}
          <div className="flex items-center gap-10 p-6 bg-white">
            {/* Avatar + Webcam */}
            <div className="relative w-32 h-32">
              <img
                src={preview || "https://i.pravatar.cc/150"}
                alt="avatar"
                className="w-32 h-32 rounded-full object-cover border shadow-md"
              />

              {/* Webcam Icon — bottom right overlay */}
              <button
                onClick={startCamera}
                className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-md 
                 flex items-center justify-center cursor-pointer hover:bg-gray-100"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                  alt="webcam"
                  className="w-6 h-6"
                />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 mt-6 flex-wrap">
                <label className="px-6 py-2 bg-secondary text-white rounded-xl shadow cursor-pointer hover:opacity-20">
                  New
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    onChange={handleFileChange}
                  />
                </label>

                <button
                  onClick={deleteAvatar}
                  className="px-6 py-2 bg-gray-200 text-black rounded-xl shadow hover:bg-gray-300"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

          {showCamera && (
            <div className="mb-10 bg-white shadow-lg p-6 rounded-2xl">
              <h2 className="text-lg font-semibold mb-3">Capture Photo</h2>
              <video
                ref={videoRef}
                className="w-64 h-64 bg-black rounded-lg"
              ></video>
              <canvas ref={canvasRef} className="hidden"></canvas>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={capturePhoto}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Capture
                </button>
                <button
                  onClick={() => setShowCamera(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["firstName", "middleName", "lastName"].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary`}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["email", "phone"].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary`}
                />
              ))}
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="lg:w-2/4 flex justify-between gap-4 flex-wrap lg:flex-nowrap">
                <label className="flex items-center gap-2 border p-3 rounded-xl bg-primary text-secondary shadow-sm w-40 border-secondary focus:outline-none focus:ring-1 focus:ring-secondary">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className=""
                  />
                  Male
                </label>

                <label className="flex items-center gap-2 p-3 rounded-xl bg-primary text-secondary shadow-sm w-40 border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className=""
                  />
                  Female
                </label>
              </div>
              <input
                name="nin"
                placeholder="NIN"
                value={formData.nin}
                onChange={handleChange}
                className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm flex-1 lg:w-2/4`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary`}
              />
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary`}
              >
                <option value="">Select Country</option>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Kenya</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>

            {/* Address */}
            <textarea
              name="address"
              placeholder="Residential Address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className={`border ${btnStyle} p-3 rounded-xl w-full bg-primary text-secondary shadow-sm border border-secondary focus:outline-none focus:ring-1 focus:ring-secondary`}
            ></textarea>
            <div className="flex items-center gap-5">
              <Button
                type="submit"
                className="bg-secondary text-white px-6 py-3 rounded-lg w-full shadow-md hover:opacity-90 min-w-max"
                onClick={setUpdate}
              >
                Save
              </Button>
              <Button
                type="reset"
                className="bg-slate-700 text-white px-6 py-3 rounded-lg w-full shadow-md hover:bg-slate-600 min-w-max"
              >
                Reset
              </Button>
            </div>
          </form>

          {helpOpen && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
                <h2 className="text-xl font-semibold mb-3">Help</h2>
                <p className="text-gray-700">
                  Update your profile, upload images, or take a photo using your
                  webcam.
                </p>
                <button
                  onClick={() => setHelpOpen(false)}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg w-full"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="overflow-x-auto block md:table w-full">
        <table className="w-full border-collapse">
          <thead className="hover:bg-gray-200">
            <tr className="bg-gray-50 text-left">
              <th className="p-3 border">Names</th>
              <th className="p-3 border text-center">Department</th>
              <th className="p-3 border text-center">Update</th>
              <th className="p-3 border text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border text-center">Science</td>
              <td className="p-3 border  font-semibold text-center">
                <Button
                  className="bg-secondary text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm"
                  onClick={() => setActiveUpdate(true)}
                >
                  Update
                </Button>
              </td>
              <td className="p-3 border font-semibold text-center">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border text-center">Science</td>
              <td className="p-3 border  font-semibold text-center">
                <Button
                  className="bg-secondary text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm"
                  onClick={setUpdate}
                >
                  Update
                </Button>
              </td>
              <td className="p-3 border font-semibold text-center">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border text-center">Science</td>
              <td className="p-3 border  font-semibold text-center">
                <Button className="bg-secondary text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Update
                </Button>
              </td>
              <td className="p-3 border font-semibold text-center">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border text-center">Science</td>
              <td className="p-3 border  font-semibold text-center">
                <Button className="bg-secondary text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Update
                </Button>
              </td>
              <td className="p-3 border font-semibold text-center">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border text-center">Science</td>
              <td className="p-3 border  font-semibold text-center">
                <Button className="bg-secondary text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Update
                </Button>
              </td>
              <td className="p-3 border font-semibold text-center">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border text-center">Science</td>
              <td className="p-3 border  font-semibold text-center">
                <Button className="bg-secondary text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Update
                </Button>
              </td>
              <td className="p-3 border font-semibold text-center">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border text-center">Science</td>
              <td className="p-3 border  font-semibold text-center">
                <Button className="bg-secondary text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Update
                </Button>
              </td>
              <td className="p-3 border font-semibold text-center">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border text-center">Science</td>
              <td className="p-3 border  font-semibold text-center">
                <Button className="bg-secondary text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Update
                </Button>
              </td>
              <td className="p-3 border font-semibold text-center">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Delete
                </Button>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3 border">Ola Seun</td>
              <td className="p-3 border text-center">Science</td>
              <td className="p-3 border  font-semibold text-center">
                <Button className="bg-secondary text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Update
                </Button>
              </td>
              <td className="p-3 border font-semibold text-center">
                <Button className="bg-red-700 text-white py-1 px-2 rounded-lg text-center inline-block shadow-md text-sm">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-evenly pt-4">
        <Button className="bg-secondary px-4 py-2 rounded-lg text-white">
          Prev
        </Button>
        <Button className="bg-secondary px-4 py-2 rounded-lg text-white">
          Next
        </Button>
      </div>
    </section>
  );
}

export default UpdateStudent;
