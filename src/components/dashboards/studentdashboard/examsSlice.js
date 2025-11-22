import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const subject = createAsyncThunk("");

const exams = createSlice({
  name: "exams",
  initialState: {
    subject: null,
  },
});
