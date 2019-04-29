export const actionTypes = {
  START_CLOCK: "START_CLOCK",
  TICK_CLOCK: "TICK_CLOCK"
};

export function startClock() {
  return {
    type: actionTypes.START_CLOCK
  };
}

export function tickClock(isServer: boolean) {
  return {
    type: actionTypes.TICK_CLOCK,
    payload: {
      light: !isServer,
      ts: Date.now()
    }
  };
}
