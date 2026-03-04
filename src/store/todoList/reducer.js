import { createSlice } from "@reduxjs/toolkit";

import fetchTodoList from "./operations/fetchTodoList";
import createTodoListItem from "./operations/createTodoListItem";
import updateTodoListItem from "./operations/updateTodoListItem";
import deleteTodoListItem from "./operations/deleteTodoListItem";

const initialState = {
  data: [],
  status: undefined,
  error: null,
};

export const todoListSlice = createSlice({
  name: "todoList",
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

    builder.addCase(createTodoListItem.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(createTodoListItem.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.status = "loaded";
      state.error = null;
    });
    builder.addCase(createTodoListItem.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(updateTodoListItem.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(updateTodoListItem.fulfilled, (state, action) => {
      state.data = state.data.map((item) => {
        if (item._id === action.payload.id) {
          item.todo = action.payload.todo
        }
        return item;
      });
      state.status = "loaded";
      state.error = null;
    });
    builder.addCase(updateTodoListItem.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });

    builder.addCase(deleteTodoListItem.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(deleteTodoListItem.fulfilled, (state, action) => {
      state.data = state.data.filter((item) => item._id !== action.payload); 
      state.status = "loaded";
      state.error = null;
    });
    builder.addCase(deleteTodoListItem.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
  },
});

export default todoListSlice.reducer;
