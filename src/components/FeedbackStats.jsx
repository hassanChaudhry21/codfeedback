import PropTypes from 'prop-types';

function FeedbackSummary({ feedback }) {
  let average = feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-summary">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackSummary.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackSummary;


