import login from "./login";
import signup from "./signup";
import todoList from "./todoList";
import localeSwitcher from "./localeSwitcher";
import shared from "./shared";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...login,
  ...signup,
  ...todoList,
  ...localeSwitcher,
  ...shared,
};
