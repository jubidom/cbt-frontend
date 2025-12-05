import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ========= ASYNC ACTION ===========
export const uploadExam = createAsyncThunk(
  "exam/uploadExam",
  async (examForm, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/api/exams/upload", {
        method: "POST",
        body: examForm, // FormData automatically sets headers
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "Upload failed");
      }

      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message || "Network error");
    }
  }
);

// ========= SLICE ===========
const examSlice = createSlice({
  name: "exam",
  initialState: {
    loading: false,
    success: null,
    error: null,
  },

  reducers: {
    resetExamState: (state) => {
      state.loading = false;
      state.success = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // ---- PENDING ----
      .addCase(uploadExam.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })

      // ---- SUCCESS ----
      .addCase(uploadExam.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message || "Upload successful";
      })

      // ---- FAILED ----
      .addCase(uploadExam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetExamState } = examSlice.actions;
export default examSlice.reducer;
