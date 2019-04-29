import produce from "immer";

import { actionTypes } from "./actions";

const loadDataSuccess = (draft, { data }) => {
  draft.placeholderData = data;
};

const loadDataFailure = (draft, { error }) => {
  draft.error = error;
};

const reducer = (state = null, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.LOAD_DATA_SUCCESS:
        loadDataSuccess(draft, action.payload);
        break;
      case actionTypes.LOAD_DATA_FAILURE:
        loadDataFailure(draft, action.payload);
        break;
    }
  });
};

export default reducer;
