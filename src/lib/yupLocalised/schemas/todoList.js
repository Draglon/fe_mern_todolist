import * as yup from "yup";

export default yup.object().shape({
  userId: yup.string().required(),
  todo: yup.string().required(),
});
