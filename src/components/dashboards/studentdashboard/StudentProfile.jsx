import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentProfile } from "./studentSlice.js";
// import { fetchStudentProfile } from "./studentSlice";
// import { fetchStudentProfile, updateStudentProfile } from "./studentSlice";

const StudentProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.student);

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
    // dispatch(updateStudentProfile(form));
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

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      {/* AVATAR SECTION */}
      <div className="flex items-center gap-10 p-6 bg-white shadow-lg rounded-2xl">
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

        {/* Update + Delete buttons moved DOWN a bit */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 mt-6">
            {/* Update New */}
            <label className="px-6 py-2 bg-purple-600 text-white rounded-xl shadow cursor-pointer hover:bg-purple-700">
              Update New
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {/* Delete Avatar */}
            <button
              onClick={deleteAvatar}
              className="px-6 py-2 bg-gray-200 text-black rounded-xl shadow hover:bg-gray-300"
            >
              Delete Avatar
            </button>
          </div>
        </div>
      </div>

      {/* CAMERA POPUP */}
      {showCamera && (
        <div className="mb-10 bg-white shadow-lg p-6 rounded-2xl">
          <h2 className="text-lg font-semibold mb-3">Capture Photo-1</h2>
          <video ref={videoRef} className="w-64 h-64 bg-black rounded-lg"></video>
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

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-2xl space-y-6"
      >
        {/* Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["firstName", "middleName", "lastName"].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.replace(/([A-Z])/g, " $1")}
              value={formData[field]}
              onChange={handleChange}
              className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm`}
            />
          ))}
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["email", "phone"].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field}
              value={formData[field]}
              onChange={handleChange}
              className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm`}
            />
          ))}
        </div>

        {/* Gender + NIN (horizontal) */}
        <div className="flex items-center gap-4">
          {/* Male */}
          <label className="flex items-center gap-2 border p-3 rounded-xl bg-primary text-secondary shadow-sm w-40">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>

          {/* Female */}
          <label className="flex items-center gap-2 border p-3 rounded-xl bg-primary text-secondary shadow-sm w-40">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>

          {/* NIN */}
          <input
            name="nin"
            placeholder="NIN"
            value={formData.nin}
            onChange={handleChange}
            className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm flex-1`}
          />
        </div>

        {/* DOB + Nationality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm`}
          />

          <p
            className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm`}
          >
            Nigeria
          </p>
          {/* <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            disabled
            className={`border ${btnStyle} p-3 rounded-xl bg-primary text-secondary shadow-sm`}
          >
            <option value="">Select Country</option>

            <option>Nigeria</option>
            <option>Ghana</option>
            <option>Kenya</option>
            <option>United States</option>
            <option>United Kingdom</option>
          </select> */}
        </div>

        {/* Address */}
        <textarea
          name="address"
          placeholder="Residential Address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
          disabled
          className={`border ${btnStyle} p-3 rounded-xl w-full bg-primary text-secondary shadow-sm`}
        ></textarea>
      </form>

      {/* HELP MODAL */}
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
  );
};

export default StudentProfile;
