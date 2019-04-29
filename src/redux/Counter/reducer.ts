import produce from "immer";

import { actionTypes } from "./actions";

const initialState = {
  count: 0
};

const countAddValue = (draft: any, value: any) => {
  draft.count += value;
};

const resetCount = (draft: any) => {
  draft.count = 0;
};

const reducer = (state = initialState, action: any) => {
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
