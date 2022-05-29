// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from "redux";
// eslint-disable-next-line import/no-unresolved
import rotateReducer from "reducers/rotateReducer";

function store(state = { rotating: true }) {
  return createStore(rotateReducer, state);
}

export default store;
