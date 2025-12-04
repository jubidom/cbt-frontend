import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLoggedInStudentSubject = createAsyncThunk(
  "subjectsSlice/fetchLoggedInStudentExams",
  async function (studentId, { rejectWithValue }) {
    try {
      const res = await axios.get(`/api/v1/students/${studentId}/subjects`);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch subjects"
      );
    }
  }
);

const subjectsSlice = createSlice({
  name: "subjectsSlice",
  initialState: {
    loading: false,
    error: "",
    subjects: [],
    selectedSubject: null,
  },

  reducers: {
    clearSubjects: (state) => {
      state.loading = false;
      state.error = null;
      state.subjects = [];
      state.selectedSubject = null;
    },

    selectSubject: (state, action) => {
      state.selectedSubject = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInStudentSubject.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchLoggedInStudentSubject.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.subjects = action.payload;
        state.selectedSubject = null;
      })
      .addCase(fetchLoggedInStudentSubject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { selectSubject, resetSubjectState } = subjectsSlice.actions;
export default subjectsSlice.reducer;
