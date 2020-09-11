import Axios from "axios";

import axios from "axios";
import { FETCH_USER } from "../../Header/store/actionConstants";
import { fromJS } from "immutable";
import { actionConstants } from "./";

export const submitSurvey = (values, history) => async (dispatch) => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: fromJS(res.data) });
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("api/surveys");
  dispatch({ type: actionConstants.FETCH_SURVEYS, payload: fromJS(res.data) });
};
