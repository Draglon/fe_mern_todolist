import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { todoListRoute } from "@/lib/routes";
import { authLoginRoute } from "@/lib/apiRoutes";
import { FETCH_LOGIN } from "./../types";

type ParamsType = {
  values: {
    email?: string;
    password?: string;
  }
  payload: {
    locale: string;
    router: any;
  },
};

const fetchAuthOperation = createAsyncThunk(
  FETCH_LOGIN,
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const { values, payload } = params;
      const { locale, router } = payload;
      const { data } = await axios.post(authLoginRoute, values);

      if ("token" in data) {
        localStorage.setItem("token", data.token);
        router.push(todoListRoute, { locale });
      }

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default fetchAuthOperation;
