import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadExam } from "./uploadExamSlice";  // <-- for backend later

const UploadExam = () => {
  const dispatch = useDispatch();
  const inputStyle = "border border-gray-300 rounded-md p-2 w-full";
  const labelStyle = "font-medium mt-3 block";

  const [formData, setFormData] = useState({
    subject: "",
    questions: "",
  });

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const subjects = [
    { value: "math", label: "Mathematics" },
    { value: "english", label: "English" },
    { value: "science", label: "Science" },
    { value: "history", label: "History" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    if (!selected.type.includes("text") && !selected.name.endsWith(".pdf")) {
      return setError("Only .txt or .pdf files are allowed.");
    }

    setError("");
    setFile(selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.subject) {
      return setError("Please select a subject.");
    }

    if (!formData.questions && !file) {
      return setError("Please enter questions or upload a file.");
    }

    const examForm = new FormData();
    examForm.append("subject", formData.subject);
    examForm.append("questions", formData.questions);
    if (file) examForm.append("file", file);

    // dispatch(uploadExam(examForm)); // <-- To activate when backend is ready

    setSuccess("Exam content is ready to upload (static mode).");
  };

  return (
  <div className="min-h-screen w-full bg-gray-100 p-4">
    <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6">Upload Exam Content</h2>

      <form onSubmit={handleSubmit}>
        {/* SUBJECT SELECTOR */}
        <label className={labelStyle}>Subject</label>
        <select
          name="subject"
          className={inputStyle}
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="">-- Select Subject --</option>
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        {/* TEXT QUESTIONS */}
        <label className={labelStyle}>Exam Questions</label>
        <textarea
          name="questions"
          className={`${inputStyle} h-60`}
          placeholder="Enter exam questions here..."
          value={formData.questions}
          onChange={handleChange}
        />

        {/* FILE UPLOAD */}
        <label className={labelStyle}>Or Upload File (.txt / .pdf)</label>
        <input
          type="file"
          className={inputStyle}
          onChange={handleFileChange}
        />

        {error && <p className="text-red-600 mt-2">{error}</p>}
        {success && <p className="text-green-600 mt-2">{success}</p>}

        <button
          type="submit"
          className="w-full mt-6 bg-secondary text-white p-3 rounded-md hover:bg-blue-700"
        >
          Upload Exam
        </button>
      </form>
    </div>
  </div>
);
};
export default UploadExam;
