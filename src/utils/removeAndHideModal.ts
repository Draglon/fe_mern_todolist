import type { AppDispatch } from "@/store/store";

import { hideModal } from "@/store/modal/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (dispatch: AppDispatch, actionCreator: any, props: any) => () => {
  dispatch(actionCreator(props));
  dispatch(hideModal());
};
