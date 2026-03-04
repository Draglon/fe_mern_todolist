export const isAuthSelector = state => Boolean(state.auth.data);
export const isLoadingSelector = state => state.auth.status === "loading";
export const userIdSelector = state => state.auth.data?._id;
