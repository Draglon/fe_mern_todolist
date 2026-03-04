import { useCallback } from "react";

import { useAppDispatch } from "@/store/hooks";

const emptyArgs = [];

const useDispatchAction = (actionCreator, ...args) => {
  const staticArgs = args.length ? args : emptyArgs;
  const dispatch = useAppDispatch();

  return useCallback(
    (...dynamicArgs) => {
      dispatch(actionCreator(...staticArgs, ...dynamicArgs));
    },
    [actionCreator, dispatch, staticArgs],
  );
};

export default useDispatchAction;
