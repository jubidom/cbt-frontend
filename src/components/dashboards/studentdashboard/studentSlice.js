//STUDENT SLICE
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//SIGN UP
export const studentSignup = createAsyncThunk(
  "authSlice/studentSignup",
  async function (data, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/signup", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Signup failed, please check your biodata"
      );
    }
  }
);

//LOG IN
export const studentLogin = createAsyncThunk(
  "authSlice/studentLogin",
  async function (data, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/login", data);
      localStorage.setItem("token", res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Wrong email or password. Please try again."
      );
    }
  }
);

//fetch data of current logged in user from backend to frontend for the student or tutor dashboard page dev
export const fetchStudentProfile = createAsyncThunk(
  "student/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/v1/students/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch user, please log in"
      );
    }
  }
);

const studentSlice = createSlice({
  name: "student",
  initialState: {
    name: null,
    matric: null,
    exams: [], // will hold the student's exam scores and subjects
    loading: false,
    error: null,
    success: false,
    token: localStorage.getItem("token") || null,
  },

  reducers: {
    resetStudentState: (state) => {
      state.error = "";
      state.success = false;
    },
    logoutStudent: (state) => {
      state.student = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentProfile.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchStudentProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.name = action.payload.name;
        state.matric = action.payload.matric;
        state.exams = action.payload.exams || [];
      })
      .addCase(fetchStudentProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetStudentState } = studentSlice.actions;
export default studentSlice.reducer;
