import * as yup from "yup";
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "@/lib/constants";

export default yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(MIN_PASSWORD_LENGTH).max(MAX_PASSWORD_LENGTH).required(),
});
