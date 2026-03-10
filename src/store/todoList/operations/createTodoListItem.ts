import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { todoListRoute } from "@/lib/apiRoutes";
import { CREATE_TODO_LIST_ITEM } from "../types";

type ParamsType = {
  resetForm: ({}: any) => void;
  values: {
    userId: string;
    todo: string;
  }
};

const createTodoListOperation = createAsyncThunk(
  CREATE_TODO_LIST_ITEM,
  async (params: ParamsType, { rejectWithValue }) => {
    const { values, resetForm } = params;
    try {
      const { data } = await axios.post(todoListRoute, values);
      resetForm({ values: { todo: "" } });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default createTodoListOperation;
