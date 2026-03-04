import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import { loginRoute } from "@/lib/routes";
import { authRegistrationRoute } from "@/lib/apiRoutes";
import { FETCH_REGISTER } from "./../types";

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

const fetchRegistrationOperation = createAsyncThunk(
  FETCH_REGISTER,
  async (params: ParamsType, { rejectWithValue }) => {
    try {
      const { values, payload } = params;
      const { locale, router } = payload;
      const { data } = await axios.post(authRegistrationRoute, values);

      if ("token" in data) {
        localStorage.setItem("token", data.token);
        router.push(loginRoute, { locale });
      }

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  },
);

export default fetchRegistrationOperation;
