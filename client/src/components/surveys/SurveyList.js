import React, { useEffect } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";

const SurveyList = (props) => {
  const { fetchSurveys, surveys } = props;
  useEffect(() => {
    fetchSurveys();
  }, []);

  const renderSurveys = () => {
    return (
      surveys &&
      surveys.reverse().map((survey) => {
        return (
          <div className="card darken-1" key={surveys.get("_id")}>
            <div className="card-content">
              <span className="card-title">{survey.get("title")}</span>
              <p>{survey.get("body")}</p>
              <p className="right">
                Sent On:{new Date(survey.get("dateSent")).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.get("yes")}</a>
              <a>No: {survey.get("no")}</a>
            </div>
          </div>
        );
      })
    );
  };

  return <div>{renderSurveys()}</div>;
};

const mapState = (state) => ({
  surveys: state.getIn(["survey", "surveys"]),
});

const mapDispatch = (dispatch) => ({
  fetchSurveys() {
    dispatch(actionCreators.fetchSurveys());
  },
});
export default connect(mapState, mapDispatch)(SurveyList);
