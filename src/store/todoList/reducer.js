import { createSlice } from "@reduxjs/toolkit";

import fetchTodoList from "./operations/fetchTodoList";
import createTodoList from "./operations/createTodoList";
import deleteTodoList from "./operations/deleteTodoList";

const initialState = {
  data: [],
  status: undefined,
  error: null,
};

export const todoListSlice = createSlice({
  name: "orders",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
      state.error = null;
    });
    builder.addCase(fetchTodoList.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(createTodoList.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(createTodoList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
      state.error = null;
    });
    builder.addCase(createTodoList.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(deleteTodoList.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(deleteTodoList.fulfilled, (state, action) => {
      state.data = state.data.filter((item) => item._id !== action.payload); 
      state.status = "loaded";
      state.error = null;
    });
    builder.addCase(deleteTodoList.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export default todoListSlice.reducer;
