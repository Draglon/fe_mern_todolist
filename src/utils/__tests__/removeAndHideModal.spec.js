import { hideModal } from "@/store/modal/actions";
import removeAndHideModal from "../removeAndHideModal";

describe("removeAndHideModal()", () => {
  const dispatch = jest.fn();
  const actionCreator = jest.fn();
  const props = { id: "1" };

  it("Calls actionCreator and hide modal", () => {
    removeAndHideModal(dispatch, actionCreator, props)();

    expect(dispatch).toHaveBeenCalledWith(actionCreator(props));
    expect(dispatch).toHaveBeenCalledWith(hideModal());
  });
});
