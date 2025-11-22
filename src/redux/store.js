import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice.js";
import studentReducer from "../components/dashboards/studentdashboard/studentSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer, // ✅ added student reducer
  },
});

export default store;
