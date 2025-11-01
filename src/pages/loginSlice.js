import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    updateCredentials(state, action) {
      state.email = action.payload.email;
    },
  },
});

export const { login, updateCredentials } = loginSlice.actions;
export default loginSlice.reducer;
