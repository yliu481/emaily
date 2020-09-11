//SurveyForm shows a form for a user to add input
import React from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form/immutable";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import invalidEmails from "../../utils/invalidEmails";
import formFields from "./formFields";

const SurveyForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, onSurveySubmit } = props;
  const renderFields = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          component={SurveyField}
          key={name}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSurveySubmit)}>
        {renderFields()}
        <Link to="/surveys" className="red btn-flat white-text">
          Cancel
        </Link>
        <button
          type="submit"
          disabled={pristine || submitting}
          className="teal btn-flat right white-text"
        >
          Next
          <i className="material-icons right"> done</i>
        </button>
        <button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
          className="grey btn-flat left white-text"
        >
          Reset
          <i className="material-icons right"> </i>
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  errors.recipients = invalidEmails(values.recipients || "");
  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = `Please provide ${noValueError}! `;
    }
  });

  return errors;
};
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
