import { MOVING_QOUTE_SET } from "core/store/actions/MovingQoute";
import { initialState } from "core/store/states/MovingQoute";

export function MovingQouteReducer(state = initialState, action) {
  switch (action.type) {
    case MOVING_QOUTE_SET:
      return {
        ...state,
        ...action.state
      };
    default:
      return state;
  }
}
