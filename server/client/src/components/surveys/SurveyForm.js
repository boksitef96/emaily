import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../helpers/validateEmails';
import FIELDS from './formFields';

class SurveyForm extends Component {
  renderFields () {
    return FIELDS.map (({label, name}) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render () {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit (() =>
            this.props.onSurveySubmit ()
          )}
        >
          {this.renderFields ()}
          <Link to="/surveys" className="red btn-flat white-text"> Cancel</Link>
          <button type="submit" className="teal btn-flat white-text right">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate (values) {
  const errors = {};

  errors.recipients = validateEmails (values.recipients || '');

  FIELDS.forEach (({name}) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}!`;
    }
  });

  return errors;
}

export default reduxForm ({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
}) (SurveyForm);
