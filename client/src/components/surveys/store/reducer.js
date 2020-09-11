import { fromJS } from "immutable";
import { actionConstants } from "./";

const defaultState = fromJS({});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionConstants.FETCH_SURVEYS:
      return state.set("surveys", action.payload);
    default:
      return state;
  }
};

export default reducer;
