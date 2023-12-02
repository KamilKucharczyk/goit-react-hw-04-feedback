import React from 'react';
import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.button_list}>
    <button type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
