import { createSelector } from "reselect";

// MovingQoute Selectors
const ValuesSelector = ({ movingQoute }) => movingQoute.values;
const QouteIdSelector = ({ movingQoute }) => movingQoute.qouteId;

export const getValues = createSelector([ValuesSelector], values => values);

export const getQouteId = createSelector([QouteIdSelector], qouteId => qouteId);
