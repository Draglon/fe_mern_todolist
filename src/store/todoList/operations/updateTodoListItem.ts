import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { todoListItemRoute } from "@/lib/apiRoutes";
import { hideModal } from "@/store/modal/actions";
import { UPDATE_TODO_LIST_ITEM } from "../types";

type ParamsType = {
  values: {
    _id: string;
    todo: string;
    userId: string;
  }
};

const updateTodoListOperation = createAsyncThunk(
  UPDATE_TODO_LIST_ITEM,
  async (params: ParamsType, { rejectWithValue, dispatch }) => {
    try {
      const { values } = params;
      const { data } = await axios.patch(todoListItemRoute(values._id), values);
      dispatch(hideModal());

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default updateTodoListOperation;
