import * as yup from "yup";

export default yup.object().shape({
  todo: yup.string().required(),
});
