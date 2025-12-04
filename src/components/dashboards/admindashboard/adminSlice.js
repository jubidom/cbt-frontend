import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/* ADMIN AUTHENTICATION SECTION */
export const adminSignup = createAsyncThunk(
  "adminSlice/adminSignup",
  async function (data, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/admin/signup", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Failed to sign up, incorrect input values"
      );
    }
  }
);

export const adminLogin = createAsyncThunk(
  "adminSlice/adminLogin",
  async function (data, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/admin/login", data);
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Failed to log in, invalid email and password"
      );
    }
  }
);

export const currentAdmin = createAsyncThunk(
  "adminSlice/currentAdmin",
  async function (_, { rejectWithValue }) {
    try {
      const token = localStorage.getItem("token");
      const res = await axios(`/api/v1/admin/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "User not authenticated");
    }
  }
);

export const logoutAdmin = createAsyncThunk(
  "adminSlice/logoutAdmin",
  async function () {
    localStorage.removeItem("token");
    return null;
  }
);

/* MANAGE STUDENTS ACCOUNTS SECTION */
export const fetchStudents = createAsyncThunk(
  "adminSlice/fetchStudents",
  async function (_, { rejectWithValue }) {
    try {
      const res = await axios.get("/api/v1/students");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to fetch students");
    }
  }
);

export const fetchStudent = createAsyncThunk(
  "adminSlice/fetchStudent",
  async function (id, { rejectWithValue }) {
    try {
      const res = await axios.get(`/api/v1/students/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to fetch student");
    }
  }
);

export const updateStudent = createAsyncThunk(
  "adminSlice/updateStudent",
  async function ({ id, data }, { rejectWithValue }) {
    try {
      const res = await axios.patch(`/api/v1/students/${id}`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Unable to update student account"
      );
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "adminSlice/deleteStudent",
  async function (id, { rejectWithValue }) {
    try {
      const res = await axios.delete(`/api/v1/students/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Unable to delete student account"
      );
    }
  }
);

/* MANAGE SUBJECTS SECTION */
export const fetchSubjects = createAsyncThunk(
  "adminSlice/fetchSubjects",
  async function (_, { rejectWithValue }) {
    try {
      const res = await axios.get("/api/v1/subjects");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch subjects");
    }
  }
);

export const fetchSubject = createAsyncThunk(
  "adminSlice/fetchSubject",
  async function (id, { rejectWithValue }) {
    try {
      const res = await axios.get(`/api/v1/subjects/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch student");
    }
  }
);

export const createSubject = createAsyncThunk(
  "adminSlice/createSubject",
  async function (subject, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/subjects", subject);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to upload subject");
    }
  }
);

export const updateSubject = createAsyncThunk(
  "adminSlice/updateSubject",
  async function ({ id, modifiedsubject }, { rejectWithValue }) {
    try {
      const res = await axios.patch(`/api/v1/subjects/${id}`, modifiedsubject);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to upload subject");
    }
  }
);

export const deleteSubject = createAsyncThunk(
  "adminSlice/deleteSubject",
  async function (id, { rejectWithValue }) {
    try {
      const res = await axios.delete(`/api/v1/subjects/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to upload subject");
    }
  }
);

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: {
    loading: false,
    error: "",
    user: null,
    token: localStorage.getItem("token") || null,
    students: [],
    student: null,
    subjects: [],
    subject: null,
  },
  reducers: {
    deleteSubject: () => {},
    updateSubjects: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default adminSlice.reducer;
