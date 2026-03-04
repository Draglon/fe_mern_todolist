import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { todoListRoute } from "@/lib/apiRoutes";
import { CREATE_TODO_LIST } from "../types";

type ParamsType = {
  title: string;
  description: string;
};

const createTodoListOperation = createAsyncThunk(
  CREATE_TODO_LIST,
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(todoListRoute, params);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default createTodoListOperation;
