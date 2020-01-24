export const MOVING_QOUTE_SET = "MOVING_QOUTE_SET";

export function setMovingQoute(state) {
  return {
    type: MOVING_QOUTE_SET,
    state
  };
}

export function submitMovingQoute(payload) {
  // TODO: Temporary to simulate request delay.
  function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  return async dispatch => {
    await sleep(1000);
    return {
      values: payload,
      qouteId: 1234
    };
  };
}
