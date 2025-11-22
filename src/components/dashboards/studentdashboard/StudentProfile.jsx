import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudentProfile,
  updateStudentProfile,
  resetStudentState,
} from "./studentSlice";

const StudentProfile = () => {
  const dispatch = useDispatch();
  const { profile, loading, error, success } = useSelector(
    (state) => state.student
  );

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    regNumber: "",
    department: "",
    gradeLevel: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState("");

  // Fetch profile on load
  useEffect(() => {
    dispatch(fetchStudentProfile());
  }, [dispatch]);

  // Fill form when profile loads
  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name,
        email: profile.email,
        regNumber: profile.regNumber,
        department: profile.department,
        gradeLevel: profile.gradeLevel,
      });
      setPreview(profile.avatar);
    }
  }, [profile]);

  // Reset UI after successful update
  useEffect(() => {
    if (success) {
      setEditing(false);
      dispatch(resetStudentState());
    }
  }, [success, dispatch]);

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
    Object.entries(formData).forEach(([key, value]) =>
      form.append(key, value)
    );
    if (avatar) form.append("avatar", avatar);

    dispatch(updateStudentProfile(form));
  };

  if (loading && !profile)
    return <p className="text-center py-10">Loading...</p>;

  if (error)
    return (
      <p className="text-red-600 text-center py-4">
        Error: {error}
      </p>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto ">
      <div className="bg-white rounded-xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(255,255,255,0.7)]">
        <div className="pl-10 flex items-center gap-20">
          <img
            src={preview || "https://i.pravatar.cc/150"}
            alt="avatar"
            className="w-28 h-28 rounded-full object-cover border-2 border-indigo-600"
          />

          <div>
            <h1 className="text-2xl font-bold">{profile?.name}</h1>
            <p className="text-gray-600">{profile?.email}</p>
            <p className="mt-1 text-gray-700">
              <span className="font-semibold">Reg No:</span>{" "}
              {profile?.regNumber}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Department:</span>{" "}
              {profile?.department}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Grade Level:</span>{" "}
              {profile?.gradeLevel}
            </p>

            <button
              onClick={() => setEditing(true)}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">
              Update Profile
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">
                  Profile Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              {Object.keys(formData).map((field) => (
                <div key={field}>
                  <label className="block mb-1 capitalize">
                    {field}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-lg"
                  />
                </div>
              ))}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;

