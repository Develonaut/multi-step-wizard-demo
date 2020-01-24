import { combineReducers } from "redux";

// Reducers
import { MovingQouteReducer } from "core/store/reducers/MovingQoute";

export const reducers = () =>
  combineReducers({
    movingQoute: MovingQouteReducer
  });
