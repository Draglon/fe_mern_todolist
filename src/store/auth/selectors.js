export const isAuthSelector = state => Boolean(state.auth.data);
export const isLoadingSelector = state => state.auth.status === "loading";
