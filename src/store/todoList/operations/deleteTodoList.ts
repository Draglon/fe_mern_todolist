import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { todoListItemRoute } from "@/lib/apiRoutes";
import { DELETE_TODO_LIST_ITEM } from "../types";

type ParamsType = {
  id: string;
};

const deleteTodoListOperation = createAsyncThunk(
  DELETE_TODO_LIST_ITEM,
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const { id } = params;
      await axios.delete(todoListItemRoute(id));

      return id;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default deleteTodoListOperation;
