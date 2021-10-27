import { SHOW_ALERT, HIDE_ALERT, SHOW_LOADER, HIDE_LOADER } from "./types";

const handlers = {
  [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: (state) => ({ ...state, visible: false }),
  [SHOW_LOADER]: (state, { payload }) => ({ ...payload, display: true }),
  [HIDE_LOADER]: (state) => ({ ...state, display: false }),
  DEFAULT: (state) => state,
};

export const alertReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
