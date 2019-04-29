import produce from "immer";

import { actionTypes } from "./actions";

const countAddValue = (draft, value) => {
  draft.count += value;
};

const resetCount = draft => {
  draft.count = 0;
};

const reducer = (state = null, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.INCREMENT:
        countAddValue(draft, +1);
        break;
      case actionTypes.DECREMENT:
        countAddValue(draft, -1);
        break;
      case actionTypes.RESET:
        resetCount(draft);
        break;
    }
  });
};

export default reducer;
