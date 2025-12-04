import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice.js";
import studentReducer from "../components/dashboards/studentdashboard/studentSlice.js";
import subjectsSlice from "../components/dashboards/studentdashboard/subjectsSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
    subjects: subjectsSlice,
  },
});

export default store;
