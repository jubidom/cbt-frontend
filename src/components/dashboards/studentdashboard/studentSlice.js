import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// STATIC MOCK PROFILE (NO BACKEND YET)
const MOCK_PROFILE = {
  name: "Israel Akanni",
  email: "israel@example.com",
  regNumber: "SC/2021/001",
  department: "Science",
  gradeLevel: "400",
  avatar: "https://i.pravatar.cc/150?img=12",
};

// ======================================================
// FETCH STUDENT PROFILE (Mocked)
// ======================================================
export const fetchStudentProfile = createAsyncThunk(
  "student/fetchProfile",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_PROFILE), 500); // simulate backend delay
    });
  }
);

// ======================================================
// UPDATE PROFILE (Mocked)
// ======================================================
export const updateStudentProfile = createAsyncThunk(
  "student/updateProfile",
  async (formData) => {
    return new Promise((resolve) => {
      const updatedProfile = {};

      formData.forEach((value, key) => {
        updatedProfile[key] = value;
      });

      // If avatar file exists → convert to preview
      if (updatedProfile.avatar instanceof File) {
        updatedProfile.avatar = URL.createObjectURL(updatedProfile.avatar);
      }

      setTimeout(() => resolve(updatedProfile), 600);
    });
  }
);

// ======================================================
// SLICE
// ======================================================
const studentSlice = createSlice({
  name: "student",
  initialState: {
    profile: null,
    loading: false,
    error: null,
    success: false,
  },

  reducers: {
    resetStudentState: (state) => {
      state.error = null;
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudentProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchStudentProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateStudentProfile.pending, (state) => {
        state.loading = true;
        state.success = false;
      })
      .addCase(updateStudentProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.profile = { ...state.profile, ...action.payload };
      })
      .addCase(updateStudentProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetStudentState } = studentSlice.actions;
export default studentSlice.reducer;
