import React from "react";
import { PropTypes } from "prop-types";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className="feedback">
             {options.map(option => (
                <button
                    key={option}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
      ))}
        </div>
    )
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};