import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import formFields from "./formFields";
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom";

const SurveyFormReview = (props) => {
  const { onCancel, formValues, submitSurvey, history } = props;

  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>{reviewFields}</div>
      <button
        className="yellow darken-3 white-text btn-flat "
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right  white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapState = (state) => ({
  formValues: state.getIn(["form", "surveyForm", "values"]),
});

const mapDispatch = (dispatch) => ({
  submitSurvey(formValues, history) {
    dispatch(actionCreators.submitSurvey(formValues, history));
  },
});

export default connect(mapState, mapDispatch)(withRouter(SurveyFormReview));
