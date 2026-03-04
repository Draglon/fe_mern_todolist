import { modalSlice } from "../reducer";

describe("modalSlice reducer", () => {
  const initialState = { 
    modalType: null,
    modalProps: {},
  };

  it("should handle showModal", () => {
    const modalState = { 
      modalType: "MODAL_CONFIRM",
      modalProps: {
        value: "text"
      },
    };
    const action = modalSlice.actions.showModal(modalState);
    const newState = modalSlice.reducer(initialState, action);

    expect(newState.modalType).toBe("MODAL_CONFIRM");
    expect(newState.modalProps.value).toBe("text");
  });

  it("should handle hideModal", () => {
    const action = modalSlice.actions.hideModal();
    const newState = modalSlice.reducer(initialState, action);
    
    expect(newState).toEqual(initialState);
  });
});
