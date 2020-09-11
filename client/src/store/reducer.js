import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form";
import { reducer as authReducer } from "../components/Header/store";
import { reducer as surveyReducer } from "../components/surveys/store";

const reducer = combineReducers({
  auth: authReducer,
  survey: surveyReducer,
  form: formReducer,
});

export default reducer;
