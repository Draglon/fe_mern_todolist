import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { todoListItemRoute } from "@/lib/apiRoutes";
import { hideModal } from "@/store/modal/actions";
import { UPDATE_TODO_LIST_ITEM } from "../types";

type ParamsType = {
  values: {
    id: string;
    todo: string;
    userId: string;
  }
};

const deleteTodoListOperation = createAsyncThunk(
  UPDATE_TODO_LIST_ITEM,
  async (params: ParamsType, { rejectWithValue, dispatch }) => {
    try {
      const { values } = params;
      await axios.patch(todoListItemRoute(values.id), values);
      dispatch(hideModal());

      return values;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default deleteTodoListOperation;
