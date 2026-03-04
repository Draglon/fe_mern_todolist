import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { todoListRoute } from "@/lib/apiRoutes";
import { FETCH_TODO_LIST } from "../types";

const fetchTodoListOperation = createAsyncThunk(
  FETCH_TODO_LIST,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(todoListRoute, {});
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default fetchTodoListOperation;
