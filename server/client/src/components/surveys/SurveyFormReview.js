import React, {Component} from 'react';
import {connect} from 'react-redux';
import FIELDS from './formFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

class SurveyFormReview extends Component {
  renderContent () {
    return FIELDS.map (({label, name}) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{this.props.formValues[name]}</div>
        </div>
      );
    });
  }

  render () {
    return (
      <div>
        <h5> Please confirm you entries </h5>
        {this.renderContent ()}
        <button
          className="orange white-text btn-flat"
          onClick={this.props.onCancel}
        >
          Back
        </button>
        <button
          className="green white-text btn-flat right"
          onClick={() =>
            this.props.submitSurvey (this.props.formValues, this.props.history)}
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {formValues: state.form.surveyForm.values};
}

export default connect (mapStateToProps, actions) (
  withRouter (SurveyFormReview)
);
