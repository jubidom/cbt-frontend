import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//SIGN UP: push new user data from frontend to the backend
export const signup = createAsyncThunk(
  "authSlice/signup",
  async function (userData, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/users/signup", userData);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Signup failed, please check your biodata"
      );
    }
  }
);

//LOG IN: push user data from frontend to the backend
export const login = createAsyncThunk(
  "authSlice/login",
  async function (userData, { rejectWithValue }) {
    try {
      const res = await axios.post("/api/v1/users/login", userData);
      localStorage.setItem("token", res.data.token);
      return res.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Login failed, please try again"
      );
    }
  }
);

//fetch data of current logged in user from backend to frontend for the student or tutor dashboard page dev
export const currentUser = createAsyncThunk(
  "authSlice/currentUser",
  async function (_, { rejectWithValue }) {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/v1/users/token", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "failed to fetch user");
    }
  }
);

//log user out and delete web token
export const logout = createAsyncThunk("authSlice/logout", async function () {
  localStorage.removeItem("token");
  return null;
});

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    loading: false,
    error: null,
    user: null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //SIGNUP
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.payload;
      })
      //LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem("token", state.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.payload;
      })
      //CURRENTLY LOGGED IN USER
      .addCase(currentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(currentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        localStorage.removeItem("token");
      });
  },
});

export default authSlice.reducer;
