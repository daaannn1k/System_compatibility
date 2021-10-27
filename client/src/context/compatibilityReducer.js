import { ADD_NOTE, DELETE_NOTE, EMPTY_ARRAY } from "./types";
const handlers = {
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    elements: [...state.elements, payload],
  }),
  [DELETE_NOTE]: (state, { payload }) => ({
    ...state,
    elements: state.elements.filter((_, index) => {
      return index !== payload;
    }),
  }),
  [EMPTY_ARRAY]: (state) => ({
    ...state,
    elements: [],
  }),
  DEFAULT: (state) => state,
};

export const compatibilityReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
