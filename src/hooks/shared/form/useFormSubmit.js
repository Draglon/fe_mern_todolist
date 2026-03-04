import { useCallback } from "react";

import useDispatchAction from "../useDispatchAction";

const useFormSubmit = (actionCreator, payload = {}) => {
  const action = useDispatchAction(actionCreator);

  return useCallback(
    (values, { setErrors, setSubmitting, setStatus, resetForm, setValues }) => {
      action({ values, setErrors, setSubmitting, setStatus, resetForm, setValues, payload });
    },
    [action, payload],
  );
};

export default useFormSubmit;
