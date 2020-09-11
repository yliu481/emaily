import { fromJS } from "immutable";
import { actionConstants } from "./";

const defaultState = fromJS({});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionConstants.FETCH_USER:
      return state.set("user", action.payload || false);
    default:
      return state;
  }
};

export default reducer;
