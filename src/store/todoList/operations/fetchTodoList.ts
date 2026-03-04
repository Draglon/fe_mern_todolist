import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { todoListRoute } from "@/lib/apiRoutes";
import { FETCH_TODO_LIST } from "../types";

type ParamsType = {
  userId: string;
};

const fetchTodoListOperation = createAsyncThunk(
  FETCH_TODO_LIST,
  async (params: ParamsType, { rejectWithValue }) => {
    const { userId } = params;
    try {
      const { data } = await axios.get(todoListRoute, { params: { userId } });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default fetchTodoListOperation;
