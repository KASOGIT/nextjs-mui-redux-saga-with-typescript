import produce from "immer";

import { actionTypes } from "./actions";

const tickClock = (draft, { ts, light }) => {
  draft.lastUpdate = ts;
  draft.light = !!light;
};

const reducer = (state = null, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.TICK_CLOCK:
        tickClock(draft, action.payload);
        break;
    }
  });
};

export default reducer;
