import produce from "immer";

import { actionTypes } from "./actions";

const initialState = {
  lastUpdate: 0,
  light: false
};

const tickClock = (draft: any, { ts, light }: any) => {
  draft.lastUpdate = ts;
  draft.light = !!light;
};

const reducer = (state = initialState, action: any) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.TICK_CLOCK:
        tickClock(draft, action.payload);
        break;
    }
  });
};

export default reducer;
